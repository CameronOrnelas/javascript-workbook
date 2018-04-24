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
console.log(typeof numToString('typeofmethod'));

//this is my method to add two numbers together
function sumOfTwoNumber(num1, num2){
  return num1 + num2
}

//this is my method to run only when two things are true

if (5>2 && 4>2) {
  console.log('Well Done!');
}

//this is my method to run when one or two things are true
if (2>2 || 8===8) {
  console.log('Well Done!');
}

//this is my method to run when two things are false
if (!2===false && !8===false) {
  console.log('Well Done!');
}
