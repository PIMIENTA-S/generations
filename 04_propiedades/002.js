const input = require("prompt-sync")();

function listaCompras(){
    this.productos = [];
    this.agregar = function(producto){
        this.productos.push(producto);
    }
    this.mostrar = function(){
        let n = 1
        for(let i of this.productos){
            console.log(`${n}. ${i}`)
        }
    }
}

let n_product = new listaCompras();
for(let num= 0; num < 5; num++){
    console.log("Agrega un producto: ");
    console.log("y/n")
    let i = input(">");
    if (i == "y"){
        n_product.agregar(input("producto: "));
    }else{
        break;
    }
}

n_product.mostrar()

