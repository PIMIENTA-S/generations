// ejercicio 1

for(var i = 1; i < 11; i++){
    console.log(i);
}



// ejercicio 2
const input = require("prompt-sync")();

let num = Number(input("Ingresa un numero: "))
for(var i = 1; i < 11; i++){
    console.log(`${num} x ${i} = ${num * i}`)

}