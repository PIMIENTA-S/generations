// ejercicio 1

const prompt = require("prompt-sync")();

let ano_nacimiento = prompt("Ingrese su año de nacimiento: ");

console.log("Tiene", 2025 - ano_nacimiento);

// ejercico 2
let num1 = prompt("Ingresa un numero: ");
let num2 = prompt("Ingresa un numero: ");

let num1_n = Number(num1);
let num2_n = Number(num2);

console.log("La suma es", num1_n + num2_n);