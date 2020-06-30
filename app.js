// import functions and grab DOM elements
const inputNoun1 = document.getElementById("noun-1");
console.log(inputNoun1);
const inputNoun2 = document.getElementById("noun-2");
console.log(inputNoun2);
const inputNoun3 = document.getElementById("noun-3");
console.log(inputNoun3);
const inputAdj1 = document.getElementById("adj-1");
console.log(inputAdj1);
const inputAdj2 = document.getElementById("adj-2");
console.log(inputAdj2);
const inputAdj3 = document.getElementById("adj-3");
console.log(inputAdj3);
const inputVerb1 = document.getElementById("verb-1");
console.log(inputVerb1);
const inputVerb2 = document.getElementById("verb-2");
console.log(inputVerb2);
const inputVerb3 = document.getElementById("verb-3");
console.log(inputVerb3);


const button = document.getElementById("button");
console.log(button);

const hidden1 = document.getElementById("hidden1");
const hidden2 = document.getElementById("hidden2");

const displayNoun1 = document.getElementById("display-noun-1");
console.log(displayNoun1);
const displayNoun2 = document.getElementById("display-noun-2");
console.log(displayNoun2);
const displayNoun3 = document.getElementById("display-noun-3");
console.log(displayNoun3);
const displayAdj1 = document.getElementById("display-adj-1");
console.log(displayAdj1);
const displayAdj2 = document.getElementById("display-adj-2");
console.log(displayAdj2);
const displayAdj3 = document.getElementById("display-adj-3");
console.log(displayAdj3);
const displayVerb1 = document.getElementById("display-verb-1");
console.log(displayVerb1);
const displayVerb2 = document.getElementById("display-verb-2");
console.log(displayVerb2);
const displayVerb3 = document.getElementById("display-verb-3");
console.log(displayVerb3);
// initialize state

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    const noun1Value = inputNoun1.value;
    const noun2Value = inputNoun2.value;
    const noun3Value = inputNoun3.value;
    const adj1Value = inputAdj1.value;
    const adj2Value = inputAdj2.value;
    const adj3Value = inputAdj3.value;
    const verb1Value = inputVerb1.value;
    const verb2Value = inputVerb2.value;
    const verb3Value = inputVerb3.value;

    displayNoun1.textContent = noun1Value;
    displayNoun2.textContent = noun2Value;
    displayNoun3.textContent = noun3Value;
    displayAdj1.textContent = adj1Value;
    displayAdj2.textContent = adj2Value;
    displayAdj3.textContent = adj3Value;
    displayVerb1.textContent = verb1Value;
    displayVerb2.textContent = verb2Value;
    displayVerb3.textContent = verb3Value;

    hidden1.style.display = 'none';
    hidden2.style.display = 'flex';
})