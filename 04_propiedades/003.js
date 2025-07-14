function reproductor(){
    this.musica = "detenido"
    this.play = function(){
        if(this.musica === "detenido" || this.musica==="pausado"){
            this.musica = "reproduciendo"
            console.log("Reproduciendo música...")
        } else{
            console.log("Ya se está reproduciendo música.")
        }
    }
    this.pausar = function(){
        if(this.musica === "reproduciendo"){
            this.musica = "pausado"
            console.log("Musica pausada")
        } else{
            console.log("No hay música reproduciéndose.")
        }
    }
    this.detener = function(){
        if(this.musica === "reproduciendo"){
            this.musica = "detenido"
            console.log("Música detenida.")
        }
    }
}

let miReproductor = new reproductor();
miReproductor.play();
// miReproductor.play();
// miReproductor.pausar();
// miReproductor.pausar();
miReproductor.detener();



