function calcularPropina(total, porcentaje){
    return total + (total * (porcentaje/100))
};

const input = require("prompt-sync")();

let t = Number(input("Ingrese total de la cuenta: "))
let p = Number(input("Porcentaje de propina: "))

console.log(`La cuenta a pagar es de: ${calcularPropina(t,p)}`)