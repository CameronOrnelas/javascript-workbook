'use strict'

//For Loop Used to return all items in an array
const carsInReverse = ['Ford','Dodge','BMW','Cadillac'];
const arrLength = carsInReverse.length;
for(i = 0; i < arrLength; i++){
  console.log (carsInReverse[i]);
};

//Create Object, Use For Loop to go through object and return value for key: birthDate
const persons =
  {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female",
  };


const keys = Object.keys(persons);

for(i = 0; i < keys.length; i++){
  if(i == keys.indexOf('birthDate')){
    console.log(persons.birthDate);
  }
};

//While Loop to return numbers 1-1000
let num = 1;

while(num <= 1000){
  console.log(num++);;
};

//Do While Loop to return numbers 1-1000
let num2 = 0;

do{;
  num2++;
  console.log(num2)
}while(num2 < 1000);
