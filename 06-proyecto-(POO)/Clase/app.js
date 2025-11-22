const express=require('express');
const Persona=require('./persona');
const Vehiculo=require('./vehiculo');
const Perro=require('./perro');
const app=express();
const puerto=3000;

const persona1=new Persona(1,'pepe',32);
const vehiculo1=new Vehiculo('Mazda','Azul',"AGH234");
const perro1=new Perro('Pastor aleman','Negro con cafe');

app.get('/persona',(req,res)=>{
    res.send(persona1.mostrarInformacion());
});
app.get('/vehiculo/acelerar',(req,res)=>{
    res.send(vehiculo1.mostrarAcelerando());
});
app.get('/vehiculo/frenar',(req,res)=>{
    res.send(vehiculo1.mostrarFrenando());
});
app.get('/perro/caminando',(req,res)=>{  
    res.send(perro1.mostrarCaminando());
});
app.get('/perro/ladrando',(req,res)=>{
    res.send(perro1.mostrarLadrando());
});

app.listen(puerto,()=>{
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});