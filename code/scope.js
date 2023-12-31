//global scope
let food = "apple";
let fruits = 5;

function store() {
  //fuction scope
  let food = "banana ";
  let fruits = 50;
  console.log(food, fruits); //applied to nside of function or for the function
}

store();

//block scope -> this is only applicable for that block of code like belown
for (let fruits = 0; fruits <= 10; fruits++) {
  console.log(fruits);
}

console.log(food, fruits); //this applied for outside of function
// we can also define variable by
// var x = 3;  -> but by uing that scope will disable means var inside any function or block can destroy var global variable and gives us bugs
//so thats why we dont use var to define or declare variable

//we can also access globallly define variable in function scope and block scope
//but we cant use fuction scope declared variables globally and in block scope
// we cant use block scope declared variables globally and function scope
//global scope
let age = 20;
let time = 10;

//function scope
function data() {
  //we can change globally declared variables value in function as below
  age = 25;
  //and then output will 25
  console.log(age);
}
data();

//blockscope
if (true) {
  console.log(age);
}
console.log(age);

//another issue of var
// var x = 3;
// var x = 4;
//it means we can create variables of same names
