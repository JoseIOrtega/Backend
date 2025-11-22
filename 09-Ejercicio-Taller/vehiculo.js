class Vehiculo{
    #marca
    #modelo
    #capacidad
    constructor(marca,modelo,capacidad){
        this.#marca=marca;
        this.#modelo=modelo;
        this.#capacidad=capacidad;
    }
    registrar(){
        return `Registrar: Error de metodo, Este metodo cumple con poliforfismo, por lo tanto lo implentan las clases hijas`;
    }
    consultar(){
        return `Consultar: Error de metodo, Este metodo cumple con poliforfismo, por lo tanto lo implentan las clases hijas`;
    }
    administrar(){
        return `Administrar: Error de metodo, Este metodo cumple con poliforfismo, por lo tanto lo implentan las clases hijas`;
    }
    get marca(){ 
        return this.#marca; 
    }
    set marca(nuevaMarca){
        this.#marca=nuevaMarca;
    }
    get modelo(){ 
        return this.#modelo; 
    }
    set modelo(nuevoModelo){
        this.#marca=nuevoModelo;
    }
    get capacidad(){ 
        return this.#capacidad; 
    }
    set capacidad(nuevaCapacidad){
        this.#marca=nuevaCapacidad;
    }
}
module.exports=Vehiculo;