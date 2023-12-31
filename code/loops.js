/*for (i = 0; i <= 100; i++) {
  //console.log(i); -> if we put here then we got otput till 100 with condition

  if (i == 20) {
    console.log("hey you hit 20!");
    continue;
    //break;-> we can use break to stop after given condition
  }

  console.log(i);//at this position we geit output on 20 AS hey you hit 20! and continue upto100

}*/

/*const texts = ["sing", "dance", "drive", "work", "success"];
for (let i = 0; i < texts.length; i++) {
  console.log(texts[i]);
}
const text = "rohit";
for (let i = 0; i < text.length; i++) {
  console.log(i); //by this we get length of rohit word
}
*/

//for-of-foreach
//more affective and can use for all
// const names = ["rohit", "prashant", "tejas", "chetan"];
// for (let name of names) {
//   console.log(names.indexOf(name));
// }

/*to break above same code
const naav = ["rohit", "prashant", "tejas", "chetan"];
for (let name of naav) {
  if (name == "tejas") {
    console.log("Stop!");
    break;
  }
  console.log(name);
}

//speciallly for arrays
//we cant break in this belon code cause break doesnt work in function
names.forEach(function (name, index) {
  console.log(name, index);
});
*/

/*const user = {
  name: "rohit",
  age: 20,
  followers: 500,
  money: "0",
};
for (let x in user) {
  console.log(x + " :- " + user[x]);
}
*/

//while, do while
let i = 0;
// while (i < 30) {
//   console.log(i);
//   i += 2;
// }

do {
  console.log(i);
  i++;
} while (i < 10);
