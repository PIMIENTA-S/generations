// ejericicio 1

const input = require("prompt-sync")();

let edad = input("Ingresa tu edad: ");
if(edad >= 18){
    console.log("Puedes entrar")
}else{
    console.log("No puedes entrar")
};

// ejercicio 2

let num1 = Number(input("Ingresa un numero: "));

if(num1 == 0){
    console.log("Es cero")
}else if(num1 > 0){
    console.log("Es positivo")
} else{
    console.log("Es negativo")
}