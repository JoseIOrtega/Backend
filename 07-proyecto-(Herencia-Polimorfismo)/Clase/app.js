const express=require('express');
const Bicicleta = require('./bicicleta');
const Lancha = require('./lancha');
const Avion = require('./avion');
const app=express();
const puerto=3000;

const bicicleta1=new Bicicleta('Gt','Azul','','cross');
const lancha1=new Lancha('Acuatic','Azul con blanco','','Mediana');
const avion1=new Avion('Pacific','Banco con rojo','','Popayán - Bogotá');


app.get('/vehiculo/bicicleta',(req,res)=>{
    res.send(bicicleta1.arrancar());
});
app.get('/vehiculo/lancha',(req,res)=>{
    res.send(lancha1.arrancar());
});
app.get('/vehiculo/avion',(req,res)=>{
    res.send(avion1.arrancar());
});
app.listen(puerto,()=>{
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});