//this is my method to display the current day and time
function displayDayAndTime() {
  const x = new Date();
  return x;
}

console.log(displayDayAndTime());

//this is my method to convert a number to a string
function numToString(num){
  return num.toString();
}
console.log(typeof numToString(5));

//this is my method to convert a string to a number
function strToNumber(str){
  return Number(str);
}
console.log(typeof strToNumber('hello'));

//this is my method to take in different datatypes and prints out the types
function differentTypes(x,y){
  if(x||y){
    return(x + y);
  }
}
typeof differentTypes(4,'0');

//this is my method to add two numbers together
function sumOfTwoNumber(num1, num2){
  return num1 + num2
}

//this is my method to run only when two things are true
function twoTruths(x,y){
  if(x && y){
    return('true');
  }
}
twoTruths(2,5);

//this is my method to run when one or two things are true
function oneTruth(x,y){
  if(x || y){
    return('true');
  }
}
oneTruth(2,0);

//this is my method to run when two things are false
function twoFalse(x,y){
  if(!x && !y){
    return('false');
  }
}
twoFalse('',0);
