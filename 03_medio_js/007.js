const input = require("prompt-sync")();

function retirarDinero(saldo, monto){
    if (monto <= saldo){
        console.log("El nuevo saldo es: ")
        return saldo - monto
    }else{
        return "Saldo insuficiente"
    }

}

let s = Number(input("Ingresa el saldo: "))
let m = Number(input("Ingresa el monto a retirar: "))

console.log(retirarDinero(s, m))