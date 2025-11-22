const Vehiculo=require('./vehiculo');

class Moto extends Vehiculo{
    constructor(marca,modelo,capacidad,potencia){
        super(marca,modelo,capacidad);
        this.potencia=potencia;
    }
    registrar(){
        return `La moto modelo ${this.modelo} y potencia ${this.potencia} ya ha sido registrada`;
    }
    consultar(){
        return `La moto de marca ${this.marca} y modelo ${this.modelo} se encuentra en mantenimiento`;
    }
    administrar(){
        return `La moto de marca ${this.marca} y capacidad ${this.capacidad} pasajeros, tiene una ruta ya planificada`;
    }
}
module.exports=Moto;

const moto2=new Moto('')