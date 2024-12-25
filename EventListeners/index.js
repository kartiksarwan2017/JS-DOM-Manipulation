/* Event Listeners */

// addEventListener element.addEventListener("click", function, booleanvalue for Event Bubbling or Capturing)

const buttonTwo = document.querySelector(".btn-2");

function alertBtn () {
    alert("I also love javascript");
}


buttonTwo.addEventListener("click", alertBtn);


// mouseover
const newBackgroundColor = document.querySelector(".box-3");

function changeBgColor() {
    newBackgroundColor.style.backgroundColor = "blue";
}


newBackgroundColor.addEventListener("mouseover", changeBgColor);
