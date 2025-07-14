const input = require("prompt-sync")();

function carrito(){
    this.productos = [];
    this.total = 0
    this.agregarProducto = function(producto){
        this.productos.push(producto);
        this.total += producto.precio;
    }
    this.calcularDescuento = function(){
        if(this.total > 100){
            let descuento = this.total * 0.9;
            console.log(`Nuevo Total: $${descuento}`)

        } else if(this.total > 50 && this.total <= 100){
            let descuento = this.total * 0.95;
            console.log(`Nuevo Total: $${descuento}`)
        } else{
            console.log(`El total es de: ${this.total}`)
        }
    }
}

let producto = new carrito()

while (true){
    let name = input("Producto: ")
    let precio  = Number(input("Precio: "))
    producto.agregarProducto({name: name, precio: precio})
    let seguir = input("¿Agregar otro producto? (s/n): ");
    if (seguir.toLowerCase() !== "s") {
        break;
    }
}

producto.calcularDescuento();


