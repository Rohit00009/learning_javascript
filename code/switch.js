/*const text = "banana";
let fruitNr = 0;

switch (text) {
  case "banana":
    console.log("WOW i like banananas too");
    fruitNr = 1;
    break;
  case "apple":
    console.log("EUUUUU");
    fruitNr = 2;
    break;
  case "avocado":
    console.log("yuck!");
    fruitNr = 3;
    break;
  //if we have other name than given in cases then use belown method
  default:
    console.log("what fruit is it ?");
    break;
}*/

let userInput = prompt("What is your fruit name?");
let convertedValue = userInput.toLowerCase(); //use to stop lowercase and uppecase error
switch (convertedValue) {
  case "apple":
    alert("Doctor will away from you!"); //output alert on webpage
    break;
  case "banana":
    console.log("Good for bulking!"); //output on console
    break;
  case "kiwi":
    console.log("euuu");
    break;
  case "chikoo":
    console.log("aaa bete .......");
    break;
}
