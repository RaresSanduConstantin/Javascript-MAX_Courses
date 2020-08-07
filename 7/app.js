const h1 = document.querySelector("h1");
const body = document.body;
const input = document.querySelector("input");
// const listItemElement = document.querySelectorAll("li");
const listItemElement = document.getElementsByTagName("li");
const ul = document.querySelector("ul");

h1.textContent = "Some new text";
h1.className = "title";
h1.style.color = "blue";
h1.style.backgroundColor = "red";

input.value = "Some other input";

for (const listItemEl of listItemElement) {
  console.dir(listItemEl);
}

body.style.backgroundColor = "#f4f4f4";

console.log(ul.childNodes);

// document.documentElement.parentElement
document.getElementsByTagName(body);
