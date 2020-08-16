// const h1 = document.querySelector("h1");
// const body = document.body;
// // const input = document.querySelector("input");
// // const listItemElement = document.querySelectorAll("li");
// const listItemElement = document.getElementsByTagName("li");
// const ul = document.querySelector("ul");

// const input = document.getElementById("input-text");
// const submit = document.getElementById("input-submit");

// h1.textContent = "Some new text";
// h1.className = "title";
// h1.style.color = "blue";
// h1.style.backgroundColor = "red";

// input.placeholder = "Some other input";

// for (const listItemEl of listItemElement) {
//   listItemEl.style.backgroundColor = "#F0FFFF";
//   console.dir(listItemEl);
// }

// body.style.backgroundColor = "#f4f4f4";

// console.log(ul.childNodes);

// // document.documentElement.parentElement
// // document.getElementsByTagName(body);

// function subtmiText() {
//   let text = input.value;
//   let h = document.createElement("p");
//   let t = document.createTextNode(text);
//   h.appendChild(t);
//   document.body.appendChild(h);
// }

// function submitText(input, button) {}

// document.addEventListener("click", submitText);

const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;
console.log(firstLi);

const section = document.querySelector("section");
const button = document.querySelector("button");

// section.style.backgroundColor = "blue";
section.className = "red-bg";
button.addEventListener("click", () => {
  // if (section.className === "red-bg visible") {
  //   section.className = "red-bg invisible";
  // } else {
  //   section.className = "red-bg visible";
  // }

  // section.classList.toggle("visible");
  section.classList.toggle("invisible");
});
