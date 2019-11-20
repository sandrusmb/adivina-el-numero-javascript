"use strict";

// Botón de prueba con el que empieza todo
const button = document.querySelector(".js-btn");
const clue = document.querySelector(".js-clue");
const message = document.querySelector(".js-tries");

function getRandomNumber() {
  const myRandomNumber = Math.floor(Math.random() * 100);
  console.log("Este es mi número aleatorio: " + myRandomNumber);
}

function writeMessage() {
  //Si el valor del input es igual al número aleatorio saldrá un mensaje en clue
  const inputValue = document.querySelector("js-answer").value;
  if (inputValue === myRandomNumber) {
    clue.innerHTML("¡Enhorabuena campeona!");
  } else if(inputValue > myRandomNumber){
    clue.innerHTML("Muy alto");
  } else(inputValue < myRandomNumber){
    clue.innerHTML("Muy bajo");
  } 
}

function buttonHandler() {
  //generar un número aleatorio
  getRandomNumber();
  //pintar pistas
  writeMessage();
  //pintar número de intentos
  writeNumberIntens();
}

// listener sobre el elemento, con tipo de evento y handler
button.addEventListener("click", buttonHandler);
