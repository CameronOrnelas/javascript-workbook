'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = 'abcd';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess) {
  // your code here
  const guessArr = guess.split('');
  const solutionArr = solution.split('');
  let rightPlaceRightLetter = 0;
  let wrongPlaceRightLetter = 0;

  guessArr.forEach((item,index)=> {
    if(solutionArr[index]==item){
      rightPlaceRightLetter == rightPlaceRightLetter +1;
    }else if(solutionArr.indexOf(item) != -1){
      wrongPlaceRightLetter == wrongPlaceRightLetter +1;
    }
  });

  console.log(`${rightPlaceRightLetter} right place right letter${wrongPlaceRightLetter} wrong place right letter`);

  //Sample: 2 right place, right letter, one right color wrong letter
}


const isValidGuess =(guess)=>{
    const guessArr = guess.split('');

  let allLettersAcceptable = true;
  guessArr.forEach((item,index)=> {
    console.log(item, 'item');
    if (letters.indexOf(item) == -1){
      allLettersAcceptable = false;
    }
  });
  return guess.length === 4 && allLettersAcceptable;
};

function mastermind(guess) {
  // solution = 'abcd'; // Comment this out to generate a random solution
  // your code here

  if(isValidGuess(guess)){
    console.log('keep going');
    if(solution == guess){
      console.log('You Won');
      //This is the board reset
      board = [];
    }else{
      generateHint(guess);
      board.push(guess);
      if(board.length > 9 ){
        console.log('You Lose');
        board = [];
      }
      console.log('not the solution, guess again');
      console.log(printBoard);
    }
  }else{
    console.log('invalid guess');
  }
}



function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
