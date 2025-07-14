function Libro(titulo, autor){
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;
    this.prestar = function(){
        if (this.prestado){
            console.log("El libro no esta disponible")
        }else{
            this.prestado = true
            console.log("El libro ha sido prestado")
        }
    }
}

let libro = new Libro("Ojas de fortuna", "yo")

libro.prestar()
libro.prestar()
