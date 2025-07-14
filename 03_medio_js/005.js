const input = require("prompt-sync")();


const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 32 },
    { nombre: "María", edad: 17 },
    { nombre: "Carlos", edad: 14 },
    { nombre: "Sofía", edad: 35 },
    { nombre: "Pedro", edad: 12 },
    { nombre: "Lucía", edad: 16 },
    { nombre: "Javier", edad: 30 },
    { nombre: "Valentina", edad: 19 },
    { nombre: "Andrés", edad: 17 },
    { nombre: "Camila", edad: 22 },
    { nombre: "Esteban", edad: 38 },
    { nombre: "Nicole", edad: 15 },
    { nombre: "Martín", edad: 28 },
    { nombre: "Isabella", edad: 13 }
];

function filtrarUsuarios(usuarios, edadMinima){
    let cumplen = []
    for(let product of usuarios){
        if (edadMinima < product.edad ){
            cumplen.push(product)
        }
    }
    return cumplen
}

let edad = Number(input("Ingresa una edad minima: "))


console.log("Los que cumplen son:");
console.log(filtrarUsuarios(personas, edad));


  