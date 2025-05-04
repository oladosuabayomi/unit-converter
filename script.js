"use strict";
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const userInputEl = document.getElementById("user-input-el");
const convertBtnEl = document.getElementById("convert-btn-el");
const outputResultLength = document.getElementById("output-result-length");
const outputResultVolume = document.getElementById("output-result-volume");
const outputResultMass = document.getElementById("output-result-mass");

function lengthConverter(unit) {
  let meterToFeet = unit * 3.281;
  return meterToFeet;
}

console.log(lengthConverter(20));

function renderUnit(value, type1, type2) {
  let unitToRender = `
  ${value} ${type1} = ${lengthConverter(
    value
  )} ${type2}  | ${value} ${type2} = ${lengthConverter(value)} ${type1}
`;

  outputResultLength.innerHTML = unitToRender;
}

// get user input on btn clicked
convertBtnEl.addEventListener("click", function () {
  let userInput = "";
  userInput = Number(userInputEl.value);

  renderUnit(userInput, "meters", "feet");
});

// on click on "convert-btn" use input to make conversion in:
// length,
// volume,
// mass
// display result on the page
