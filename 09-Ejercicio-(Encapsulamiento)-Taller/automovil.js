const Vehiculo=require('./vehiculo');

class Automovil extends Vehiculo{
    constructor(marca,modelo,capacidad,tipo){
        super(marca,modelo,capacidad);
        this.tipo=tipo;
    }
    registrar(){
        return `El automóvil modelo ${this.modelo} y tipo ${this.tipo} ya ha sido registrado`;
    }
    consultar(){
        return `El automóvil de marca ${this.marca} y modelo ${this.modelo} se encuentra activo`;
    }
    administrar(){
        return `El automóvil de marca ${this.marca} y capacidad ${this.capacidad} pasajeros, tiene una ruta ya planificada`;
    }
}
module.exports=Automovil;






