const listUsers = ["sai", "rohit", "chetan", "ruchiket"];

//how to access array
console.log(listUsers[2]); //we can also find type just like
//console.log(typeOf listUsers); -->object
//ther are different methods for array byusing syntax -> arrayName.method
//for example
listUsers.pop(); //to delete last one
console.log(listUsers);

listUsers.push("yd"); //to add new element
console.log(listUsers);

listUsers.shift(); //to delete from begining
console.log(listUsers);

listUsers.unshift("rohit"); //to add at begining
console.log(listUsers);

console.log(listUsers.length); //to see length of array
console.log(listUsers.indexOf("chetan"));
