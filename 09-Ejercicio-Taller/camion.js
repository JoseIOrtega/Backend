const Vehiculo=require('./vehiculo');

class Camion extends Vehiculo{
    constructor(marca,modelo,capacidad,carga){
        super(marca,modelo,capacidad);
        this.carga=carga;
    }
    registrar(){
        return `El camión modelo ${this.modelo} y capacidad ${this.capacidad} aun no ha sido registrado`;
    }
    consultar(){
        return `El camión de marca ${this.marca} y modelo ${this.modelo} se encuentra inactivo`;
    }
    administrar(){
        return `El camión de marca ${this.marca} y carga ${this.carga} toneladas, tiene una ruta ya planificada`;
    }
}
module.exports=Camion;