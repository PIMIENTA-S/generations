const input = require("prompt-sync")();


function convertirMoneda(monto, monedaDestino){
    if (monedaDestino == "usd"){
        return monto/3980.98
    } else if (monedaDestino == "eur"){
        return monto /4693.90
    } else{
        return "Error"
    }

}

let monto = Number(input("Ingrese monto: "))
let consulta = input("Ingrese la moneda a convertir: ")

console.log(`Su saldo es ahora de ${convertirMoneda(monto, consulta).toFixed(2)} ${consulta}`)
