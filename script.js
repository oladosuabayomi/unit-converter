"use strict";

const userInputEl = document.getElementById("user-input-el");
const convertBtnEl = document.getElementById("convert-btn-el");
const outputResultLength = document.getElementById("output-result-length");
const outputResultVolume = document.getElementById("output-result-volume");
const outputResultMass = document.getElementById("output-result-mass");

// length conversion
function meterFeetConverter(unit) {
  return (unit * 3.281).toFixed(3);
}

function feetMeterConverter(unit) {
  return (unit / 3.281).toFixed(3);
}

function renderUnitLength(value) {
  let unitToRender = `
  ${value} meters = ${meterFeetConverter(
    value
  )} feet  | ${value} feet = ${feetMeterConverter(value)} meters`;

  outputResultLength.innerHTML = unitToRender;
}

// volume conversion
function literGallonConverter(unit) {
  return (unit * 0.264).toFixed(3);
}

function gallonLiterConverter(unit) {
  return (unit / 0.264).toFixed(3);
}

function renderUnitVolume(value) {
  let unitToRender = `
  ${value} liters = ${literGallonConverter(
    value
  )} gallons  | ${value} gallons = ${gallonLiterConverter(value)} liter`;

  outputResultVolume.innerHTML = unitToRender;
}

// mass conversion
function kiloPoundConverter(unit) {
  return (unit * 2.204).toFixed(3);
}

function poundKiloConverter(unit) {
  return (unit / 2.204).toFixed(3);
}

function renderUnitMass(value) {
  let unitToRender = `
  ${value} meters = ${kiloPoundConverter(
    value
  )} feet  | ${value} feet = ${poundKiloConverter(value)} meters`;

  outputResultMass.innerHTML = unitToRender;
}

// get user input on btn clicked and render result

convertBtnEl.addEventListener("click", function () {
  let userInput = userInputEl.value;
  if (userInput <= 0) {
    alert("Invalid input: Enter a number greater than Zero!");
  } else {
    renderUnitLength(userInput);
    renderUnitVolume(userInput);
    renderUnitMass(userInput);

    userInputEl.value = "";
  }
});
