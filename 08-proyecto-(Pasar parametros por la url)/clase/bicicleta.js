const Vehiculo=require('./vehiculo');

class Bicicleta extends Vehiculo{
    constructor(marca,color,placa,tipo){
        super(marca,color,placa);
        this.tipo=tipo;
    }
    arrancar(){
        return `Para arrancar la bicicleta marca ${this.marca} de color ${this.color} y tipo ${this.tipo}, se debe impulsar con los pedales ganando velocidad para luego empezar a pedalear de forma continua`;
    }
}

module.exports=Bicicleta;