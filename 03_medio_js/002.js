const input = require("prompt-sync")();

function validarContraseña(pass){
    let requisito1 = false;
    let requisito2 = false;
    let numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let requisito3 = false;


    
    if (pass.length >= 8) {
        requisito1 = true
    }

    for (var i=0; i < 10; i++){
        if (pass.includes(numeros[i])){
            requisito2 = true
            break
        }
    }

    for (let i = 0; i < pass.length; i++) {
        if (/[A-Z]/.test(pass[i])) {
            requisito3 = true;
            break;
        }
    }

    if (requisito1 && requisito2 && requisito3){
        return true
    }else{
        return false
    }
    
}


let pass = input("Ingresa una nueva contraseña: ");
console.log("- Tiene al menos 8 caracteres.\n- Incluye un número.\n- Incluye una mayúscula");

while (!validarContraseña(pass)){
    console.log("No cumple");
    pass = input("Ingresa una contraseña valida: ");

}

console.log("Contraseña aceptada");

