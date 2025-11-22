class Persona{
    constructor(id,nombre,edad){
        this.id=id;
        this.nombre=nombre;
        this.edad=edad;
    }
    mostrarInformacion(){
        return `La persona: ${this.nombre} tiene ${this.edad}`;
    }
}
module.exports=Persona;
