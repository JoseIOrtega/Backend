class Vehiculo{
    constructor(marca,color,placa){
        this.marca=marca;
        this.color=color;
        this.placa=placa;
    }
    arrancar(){
        return `Error de metodo, Este metodo cumple con poliforfismo, por lo tanto lo implentan las clases hijas`;
    }
}
module.exports=Vehiculo;
