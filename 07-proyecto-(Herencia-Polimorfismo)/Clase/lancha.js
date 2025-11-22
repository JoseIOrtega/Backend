const Vehiculo=require('./vehiculo');

class Lancha extends Vehiculo{
    constructor(marca,color,placa,tamaño){
        super(marca,color,placa);
        this.tamaño=tamaño;
    }
    arrancar(){
        return `Para arrancar la lancha marca ${this.marca} de color ${this.color} y tamaño ${this.tamaño} se debe tirar de la cuerda de arranque hasta que el motor encienda`;
    }
}

module.exports=Lancha;





