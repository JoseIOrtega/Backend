const Vehiculo=require('./vehiculo');

class Avion extends Vehiculo{
    constructor(marca,color,placa,ruta){
        super(marca,color,placa);
        this.ruta=ruta;
    }
    arrancar(){
        return `Para arrancar el avión marca ${this.marca} de color ${this.color} que cubre la ruta ${this.ruta} se debe activar los sistemas eléctricos y luego se inicia el motor de arranque`;
    }
}
module.exports=Avion;


