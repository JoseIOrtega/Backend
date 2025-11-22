const express=require('express');
const app=express();
const puerto=3000;

const Vehiculo=require('./vehiculo');
const Moto=require('./moto');
const Automovil=require('./automovil');
const Camion=require('./camion');

app.get('/vehiculo/:marca/:modelo/:capacidad',(req,res)=>{
    const marca=req.params.marca;
    const modelo=req.params.modelo;
    const capacidad=req.params.capacidad;
    const vehiculo1=new Vehiculo(marca,modelo,capacidad);
    res.send(
        {
            marca: vehiculo1.marca,
            modelo: vehiculo1.modelo,
            capacidad: vehiculo1.capacidad,
        }
    );
    console.log(vehiculo1.marca);
    console.log(vehiculo1.modelo);
    console.log(vehiculo1.capacidad);
});
app.get('/vehiculo/moto/:marca/:modelo/:capacidad/:potencia',(req,res)=>{
    const marca=req.params.marca;
    const modelo=req.params.modelo;
    const capacidad=req.params.capacidad;
    const potencia=req.params.potencia;
    const moto1=new Moto(marca,modelo,capacidad,potencia);
    res.send(moto1.registrar());
});
app.get('/vehiculo/automovil/:marca/:modelo/:capacidad/:tipo',(req,res)=>{
    const marca=req.params.marca;
    const modelo=req.params.modelo;
    const capacidad=req.params.capacidad;
    const tipo=req.params.tipo;
    const automovil1=new Automovil(marca,modelo,capacidad,tipo);
    res.send(automovil1.registrar());
});
app.get('/vehiculo/camion/:marca/:modelo/:capacidad/:carga',(req,res)=>{
    const marca=req.params.marca;
    const modelo=req.params.modelo;
    const capacidad=req.params.capacidad;
    const carga=req.params.carga;
    const camion1=new Camion(marca,modelo,capacidad,carga);
    res.send({marca:camion1.marca});
});

app.listen(puerto,()=>{
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});