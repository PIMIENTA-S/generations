// ejercicio 1

const input = require("prompt-sync")();

let num = input("Ingresa un numero: ");
let count = 1
while(count <= num){
    console.log(count)
    count ++
};


// ejercicio 2


let contrasena_ingresada = input("Ingresa tu contraseña: ");
let contrasena = "1234";

while (contrasena != contrasena_ingresada){
    console.log("La contraseña ingresa es incorrecta")
    contrasena_ingresada = input("Ingresa tu contraseña: ");
}

console.log("contraseña correcta")