class Vehiculo{
    constructor(marca,color,placa){
        this.marca=marca;
        this.color=color;
        this.placa=placa;
    }
    mostrarAcelerando(){
        return `El vehículo ${this.marca} de color ${this.color} y de placa ${this.placa} esta acelerando`;
    }
    mostrarFrenando(){
        return `El vehículo ${this.marca} de color ${this.color} y de placa ${this.placa} esta frenando`;
    }
}
module.exports=Vehiculo;