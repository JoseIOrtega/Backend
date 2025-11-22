class Perro{
    constructor(raza,color){
        this.raza=raza;
        this.color=color;
    }
    mostrarCaminando(){
        return `El perro de raza ${this.raza} y de color ${this.color} esta caminando`;
    }
    mostrarLadrando(){
        return `El perro de raza ${this.raza} y de color ${this.color} esta ladrando`;
    }
}
module.exports=Perro;