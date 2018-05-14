'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//This function will take in a word and translate to pigLatin  given the parameters
function pigLatin(word) {

  const translate = (word) => {
    let array = word.split('');
    let vowels = ['a','e','i','o','u'];
    let newWord = '';
    for(let i = 0; i < vowels.length; i++) {
      for(let y = 0; y < word.length; y++) {
        if(word[y] === vowels[i]) {
          for(let x = y; x < word.length; x++){
            newWord = newWord + word[x];
          }
          for(let z = 0; z < y; z++){
            newWord = newWord + word[n];
          }
          return newWord + "ay";
        }
      }
    }
  }

  translate("duke");

};


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
