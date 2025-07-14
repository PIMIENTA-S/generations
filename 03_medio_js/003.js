const input = require("prompt-sync")();

const inventario = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Zapatos", precio: 50 },
    { nombre: "Pantalón", precio: 35 },
    { nombre: "Gorra", precio: 15 },
    { nombre: "Chaqueta", precio: 60 },
    { nombre: "Calcetines", precio: 5 },
    { nombre: "Bufanda", precio: 12 },
    { nombre: "Cinturón", precio: 18 },
    { nombre: "Botas", precio: 80 },
    { nombre: "Sudadera", precio: 40 },
    { nombre: "Guantes", precio: 10 },
    { nombre: "Sandalias", precio: 25 }
];


function buscarProducto(n, i){
    n = n.toLowerCase()
    for (let product of i){
        if (n == product.nombre.toLowerCase()){
            console.log("si esta")
            return product
        }
    }
    console.log("No se encontró")
    return null
};

let p = input("Ingrese un producto: ");


console.log(buscarProducto(p, inventario));