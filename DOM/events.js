const button = document.querySelector("#submit");
const todoList = document.querySelector("#todo-list");
const todoNr = document.querySelector(".todo-nr b");
const mainTitle = document.querySelector(".main-title");
const nameInput = document.querySelector(".name-input");
const items = todoList.children;
// // we can attach a eventc listner
// //it can be CLICK,SCROLL,RESIZING THE BROWSER

// // button.addEventListener("click", addItem);
// // function addItem() {
// //   console.log("NEW ITEM ADDED");
// // }
// //we can use both method sows in upper and lower
// //in uppper we declare function afetr method and just declared in it
// //and in lower we direct declare it in method

// //let add event listner
button.addEventListener("click", function (e) {
  //console.log("NEW ITEM ADDED2");
  e.preventDefault(); //use to stop natural behavior of browser
  //create element
  const newItem = document.createElement("li");
  //adding class
  newItem.classList.add("item");
  //adding the text
  //newItem.innerText = `Item ${items.length + 1}`; //whenever we want to us $ then we use `` this symbols instead of strings
  newItem.innerText = nameInput.value; //to add value which gives by us
  todoList.appendChild(newItem);
  todoNr.innerText = items.length; //by this declaring in function that helps in auo pdate in number odf items

  //delete te value from input
  nameInput.value = "";
  //events bubbling
  //we can also create the element and attachig the listner
  newItem.addEventListener("click", deleteItem);
  //console.log(nameInput); -> we dont need it anymore cuz we add input
});

// for (item of items) {
//   item.addEventListener("click", deleteItem);
// }

function deleteItem(e) {
  //console.log("delete"); -> we can also use this when e not declared in function and then we got delete string in console
  //console.log(e.target); -> either when using e we got that item line from html file
  e.stopPropagation(); //by using this only event apply on that command not on ul , body , document and further
  e.target.remove(); //we used remove fuction
}

todoList.addEventListener("click", function () {
  console.log("UL EXECUTES");
  todoList.classList.toggle("fade");
});

button.addEventListener("keydown" /*"click"*/, function (event) {
  //we can also do css functions
  // mainTitle.style.color = "red";
  // mainTitle.style.fontSize = "200px";
  //but using above format code become more messy
  //so we declare all css fuctions in css file and just declare class here
  //mainTitle.classList.toggle("modify"); //we can also use toggle instead off add cuz toggle add or remove that class from DOM
  //lets access event by keyword then we change event from click to keydown
  if (event.keyCode === 81) {
    mainTitle.classList.toggle("modify");
  }
  // console.log(event);
  // mainTitle.classList.toggle("modify");
});
