// Printing message 
console.log("testing to see if JS file is linked");

/* Interction */
const greenCrircle = document.getElementById("green");
const pinkCrircle = document.getElementById("plum");
const blueCrircle = document.getElementById("blue");

let interactionContainer = document.getElementById("interactionContainer");

greenCrircle.addEventListener("click", function() {
    console.log(interactionContainer);
    interactionContainer.style.backgroundColor = "lightgreen";
})

pinkCrircle.addEventListener("click", function() {
    interactionContainer.style.backgroundColor = "plum";
})

blueCrircle.addEventListener("click", function() {
    interactionContainer.style.backgroundColor = "lightblue";
})

const loopContainer = document.getElementById("loopContainer");
const message = "hello";

// Loop
for (let i = 0; i < 10; i++) {
    console.log("brave");
    const textDiv = document.createElement("div");
    textDiv.innerHTML = message;
    loopContainer.appendChild(textDiv);
}

// Container
const conditionContainer = document.getElementById("conditionContainer");
const sqaure = document.getElementById("square");

conditionContainer.addEventListener("mouseover", function() {
    console.log("hovering over condition container");
    sqaure.style.backgroundColor = "green";

});

conditionContainer.addEventListener("mouseout", function() {
    // console.log("hovering over condition container");
    sqaure.style.backgroundColor = "lightsalmon";

});

// Text

const increaseText = document.getElementById('increaseText');
let fontSize = 16;

setInterval(() => {
    fontSize++;
    increaseText.style.fontSize = `${fontSize}px`;
}, 1000);

// Input
const inputField = document.getElementById('inputText');
const charCountDisplay = document.getElementById('text-length');

inputField.addEventListener('input', function() {
    const charCount = this.value.length;
    charCountDisplay.textContent = `Number of characters: ${charCount}`;
});

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
});