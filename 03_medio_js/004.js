const input = require("prompt-sync")();

function calcularPromedio(array){
    let suma = 0

    for (var i = 0; i < array.length; i++){
        suma += array[i]
    }

    return suma/array.length
}


let nota1 = Number(input("Ingrese nota: "))
let nota2 = Number(input("Ingrese nota: "))
let nota3 = Number(input("Ingrese nota: "))
let nota4 = Number(input("Ingrese nota: "))

let lista = [nota1, nota2, nota3, nota4]


console.log(`Su promedio es de ${calcularPromedio(lista).toFixed(2)}`)
