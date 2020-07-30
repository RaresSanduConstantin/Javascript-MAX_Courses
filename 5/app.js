// let name = "Max";

// if (name === "Max") {
//   var hobbies = ["Sports", "Cooking"];
//   console.log(hobbies);
// }

// function greet() {
//   let age = 30;
//   let name = "Manuel";
//   console.log(name, age, hobbies);
// }

// // console.log(name, hobbies);

// greet();

// let userName = "Max";
// console.log(userName);

// function getName() {
//   return prompt("Your nameL ", "");
// }

// function greet() {
//   const userName = getName();
//   console.log("Hello " + userName);
// }

// greet();

let obj1 = { a: "1" };

let obj2 = obj1;

let obj3 = { ...obj1 };

obj1.a = "2";

console.log("Obiect 1 ", obj1, "Obiect 2 ", obj2, "Obiect 3 ", obj3);
