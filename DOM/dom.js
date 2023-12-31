// document.title = "kasa kay ?"; //byt this method we can change title
// const header = document.getElementsByTagName("h2"); //thid method gives all h2 from the page
// console.log(header); //we can also access a specific element by declaring their index as --> console.log(header[1]) --> after this 1 indexed element will get

// //lets see for classes
// const list = document.getElementsByClassName("item");
// console.log(list);
// console.log(list.length);

// //lets by id
// const button = document.getElementById("submit");//first id only will print
// console.log(button);

//above all return a html collection

//query selelctor -> retuen a nodelist
const headers = document.querySelector("h2");
console.log(headers);

const header = document.querySelectorAll("h2");
console.log(header); //we can also get specific element by index

//for calssname we use . dot
const list = document.querySelectorAll(".item");
console.log(list);

//for id we use # hash
const list1 = document.querySelectorAll("#submit");
console.log(list1);

//we can also access a specific class of item by
const list3 = document.querySelector("h2.item");
console.log(list3);

//we can aso acces by ul id
const list4 = document.querySelector("#list a");
console.log(list4);

//query selector is little bit slower than others
//html collectiom can only hold node elements
//but nodelist can hold node elements , node texts, node comments
