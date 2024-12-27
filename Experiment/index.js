const dropdown = document.querySelector("#dropdown");
const h1 = document.createElement("h1");

dropdown.addEventListener("change", function(e) {
    const dropdown = e.target;

    for(let i = 0; i < e.target.length; i++) {
       h1.textContent = `${e.target.value} is clicked`;  
    }

});

document.body.appendChild(h1);

