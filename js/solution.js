const ul = document.getElementById("ulId");

for (const elem of ul.children) {
  console.log(elem);
}

//

const arrNameAttr = [];
const arrValueAttr = [];

for (const attr of ul.attributes) {
  arrNameAttr.push(attr);
  arrValueAttr.push(attr.value);
}

console.log(arrNameAttr);
console.log(arrValueAttr);

//

ul.lastElementChild.innerHTML = "Hello, my name is Ula-la";

//

ul.firstElementChild.setAttribute("data-my-name", "Ula");

//

ul.removeAttribute("data-dog-tail");

console.log(ul);
