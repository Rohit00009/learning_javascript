function greet(name, age) {
  //first we define function
  //let name = prompt("What is your name ?");
  console.log("Welcome to our website " + name + "!");
  console.log(age);
}

console.log("rest of code");
//
////
/////
function signUp() {
  let name = prompt("WHat is your name ?");
  greet(name, 25);
} //then we call it to execute
//greet(abcd);--> value passed in funtion is called as arguement
signUp();
/*
let mxNr = Math.log(maxNr);  <--method to find max no.
console.log(maxNr);
let we see in function format
*/
function max(nr1 = 0, nr2 = 0) {
  //we set nr1 & nr2 = 0 as a default value
  if (nr1 > nr2) {
    return nr1 * 100;
  } else {
    return nr2 * 100;
  }
}
let inbox = max(1, 5);
console.log(inbox);
