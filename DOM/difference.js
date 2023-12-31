// //html collectiom can only hold node elements
// //but nodelist can hold node elements , node texts, node comments
// const collectionItems = document.getElementsByClassName("item");
// const nodeItems = document.querySelector("#todo-list");

// console.log(collectionItems);
// console.log(nodeItems.childNodes); //by this we hae both node elment s and child elements (texts)

// //we can also use loops
// const nodeItem = document.querySelectorAll(".item");
// for (item of nodeItem) {
//   console.log(item);
// }

// //we can use foreach for nodelist but cant for html collections
// nodeItem.forEach(function () {
//   //we use function in functon which is anynomus parameter
//   console.log(item);
// });

// //we can also add new item by js
// const collecionItems = document.getElementsByClassName("item");
// const todoList = document.getElementById("todo-list");
// const todoNr = document.getElementsByClassName("todo-nr")[0];

// const newItem = document.createElement("li");
// newItem.classList.add("item");
// newItem.innerText = "Item 3";

// todoList.appendChild(newItem);

// const anotherItem = document.createElement("li");
// anotherItem.classList.add("item");
// anotherItem.innerText = "Item 4";
// todoList.appendChild(anotherItem);

// //we can also update amount of items that we have
// todoNr.innerText = collectionItems.length;

// console.log(collecionItems);//afetr this only it will update !

//by query selector-> output isnt dynamic , its doesnt update itself
// const nodeItems = document.querySelectorAll(".item");
// const todoList = document.querySelector("#todo-list");
// const todoNr = document.querySelector(".todo-nr");

// const newItem = document.createElement("li");
// newItem.classList.add("item");
// newItem.innerText = "Item 3";

// const anotherItem = document.createElement("li");
// anotherItem.classList.add("item");
// anotherItem.innerText = "Item 4";
// todoList.appendChild(anotherItem);

// todoList.appendChild(newItem);

// //we can also update amount of items that we have
// todoNr.innerText = nodeItems.length;

// console.log(nodeItems); //afetr this only it will update ! it just update on display not in console.

//query selector is static

//if we want to add them in aslo console means in nodelist
const todoList = document.querySelector("#todo-list");
const items = todoList.children;
console.log(items);
const todoNr = document.querySelector(".todo-nr");

const newItem = document.createElement("li");
newItem.classList.add("item");
newItem.innerText = "Item 3";

const anotherItem = document.createElement("li");
anotherItem.classList.add("item");
anotherItem.innerText = "Item 4";
todoList.appendChild(anotherItem);

todoList.appendChild(newItem);

//we can also update amount of items that we have
todoNr.innerText = items.length;

console.log(items);

//major diifrence is
//nodelist doesnt upadate items by itself
// but htmlcollections do
