// Creating Elements

const ul = document.querySelector("ul");
const li = document.createElement("li");


// Addding Element
ul.append(li);

// modifying text
// const firstListItem = document.querySelector(".list-items");
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);

li.innerText = "X-Men";



/* Modifying Elements Attributes and Classes */

// li.setAttribute("id", "main-heading");
// li.removeAttribute("id");

// const title = document.querySelector("#main-heading");

// console.log(title.getAttribute("id"));


li.classList.remove("list-items");

console.log(li.classList.contains("list-items"));

// Remove an Element

li.remove();