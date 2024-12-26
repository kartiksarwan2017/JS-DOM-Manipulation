/* here we have attached event listeners to each of the descendants. Rather than attaching it to each and every event listeners 
we could attach it to a single event listener that is parent element  */

// document.querySelector("#football").addEventListener("click", function(e) {
//     console.log("football is clicked");

//     const target = e.target;

//     if(target.matches("li")) {
//         target.style.backgroundColor = "lightgrey";
//     }
// });

// document.querySelector("#basketball").addEventListener("click", function(e) {
//     console.log("basketball is clicked");

//     const target = e.target;

//     if(target.matches("li")) {
//         target.style.backgroundColor = "lightgrey";
//     }
// });

// document.querySelector("#boxing").addEventListener("click", function(e) {
//     console.log("boxing is clicked");

//     const target = e.target;

//     if(target.matches("li")) {
//         target.style.backgroundColor = "lightgrey";
//     }
// });

// document.querySelector("#tennis").addEventListener("click", function(e) {
//     console.log("tennis is clicked");

//     const target = e.target;

//     if(target.matches("li")) {
//         target.style.backgroundColor = "lightgrey";
//     }
// });

// document.querySelector("#golf").addEventListener("click", function(e) {
//     console.log("golf is clicked");

//     const target = e.target;

//     if(target.matches("li")) {
//         target.style.backgroundColor = "lightgrey";
//     }
// });


// document.querySelector("#rugby").addEventListener("click", function(e) {
//     console.log("rugby is clicked");

//     const target = e.target;

//     if(target.matches("li")) {
//         target.style.backgroundColor = "lightgrey";
//     }
// });

// Event Delegation Using Event Delegation we save a tons of memory of event listeners
document.querySelector("#sports").addEventListener("click", function(e) {
    console.log(e.target.getAttribute("id") + " is clicked");

    const target = e.target;

    if(target.matches("li")) {
        target.style.backgroundColor = "lightgrey";
    }
});


const sports = document.querySelector("#sports");
const newSport = document.createElement("li");

newSport.innerText = 'cricket';
newSport.setAttribute("id", "cricket");

sports.appendChild(newSport);