const input = require("prompt-sync")();

function contarPalabras(texto){
    let lista = texto.split(" ")
    return lista.length
}

let string = input("Ingresa una cadena: ")
console.log(contarPalabras(string))