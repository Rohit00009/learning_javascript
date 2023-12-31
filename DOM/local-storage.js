//local storage -> local storage process even after closing the browser
//and if we want to clear local storage then do
//localStorage.clear();
// localStorage.setItem("todo", "Feed the cat");
// localStorage.setItem("user", "hello!");
// localStorage.setItem("todo", "feed myself"); //in this todo key is already declared in previous one then the newly declared keys value overlay on old value. -> so this is an  issue

// //lets get back that string
// const user = localStorage.getItem("user");
// console.log(user);
// console.log(typeof user);

// //session storage -> after closing browser everything lost which in session storage

// sessionStorage.setItem("todoList", "session feeding cat");

// localStorage.clear();

const todoList = [
  "feed the cat",
  "clean the dog",
  "feed the monkey",
  "fuck you",
];

//JSON is syntax that basically used for serializing object and arrays . -> used when we want to retrieved back some info from API.
//localStorage.setItem("todos", todoList);
localStorage.setItem("todos", JSON.stringify(todoList)); //this gives us that array fromat in string format with [] brackets in storage
//but when we want to get back then its turn again in array in console
const retrieved = JSON.parse(localStorage.getItem("todos"));
console.log(retrieved);
console.log(typeof retrieved); //in js array is type of object so typeof retrieved will object!

//we can aslo do it wit object means we can stringify it then get abck again as object

//lets get back the items
// const retrieved = localStorage.getItem("todos");
// console.log(retrieved);
// console.log(typeof retrieved); //but there is an issue i.e. we declared array but we got a string

//so lets solve issue
