const express=require('express');
const Bicicleta = require('./bicicleta');
const Lancha = require('./lancha');
const Avion = require('./avion');
const app=express();
const puerto=3000;

app.get('/bicicleta/:marca/:color/:placa/:tipo',(req,res)=>{
    const marca=req.params.marca;
    const color=req.params.color;
    const placa=req.params.placa;
    const tipo=req.params.tipo;
    const bicicleta1=new Bicicleta(marca,color,placa,tipo);
    res.send(bicicleta1.arrancar());
});
app.get('/lancha/:marca/:color/:placa/:tamano',(req,res)=>{
    const marca=req.params.marca;
    const color=req.params.color;
    const placa=req.params.placa;
    const tamano=req.params.tamano;
    const lancha1=new Lancha(marca,color,placa,tamano);
    res.send(lancha1.arrancar());
});
app.get('/avion/:marca/:color/:placa/:ruta',(req,res)=>{
    const marca=req.params.marca;
    const color=req.params.color;
    const placa=req.params.placa;
    const ruta=req.params.ruta;
    const avion1=new Avion(marca,color,placa,ruta);
    res.send(avion1.arrancar());
});
app.listen(puerto,()=>{
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});