"use strict";

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const magicNumber = getRandomNumber(100);
const input = document.querySelector("input");
const clue = document.querySelector(".js-clue");

function compareNumbers() {
  const inputValue = parseInt(input.value);
  if (inputValue < 1 || inputValue > 100) {
    clue.innerHTML = "¡Error! El número tiene que estar entre 1 y 100";
  } else if (inputValue === magicNumber) {
    clue.innerHTML = "¡Enhorabuena has acertado!";
  } else if (inputValue > magicNumber) {
    clue.innerHTML = "Demasiado alto";
  } else if (inputValue < magicNumber) {
    clue.innerHTML = "Demasiado bajo";
  }
}

const tries = document.querySelector(".js-tries");
let numberTries = 0;
printTries();

function printTries() {
  tries.innerHTML = `Número de intentos: ${numberTries}`;
}

const button = document.querySelector("button");

function clickHandler() {
  compareNumbers();
  numberTries = numberTries + 1;
  printTries();
}

button.addEventListener("click", clickHandler);
