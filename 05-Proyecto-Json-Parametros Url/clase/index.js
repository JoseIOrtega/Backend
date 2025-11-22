const express=require('express');
const app=express();
const port=3000;

app.get('/index/:nombre',(req,res)=>{
    const nomb=req.params.nombre;

    res.send('hola '+nomb);
});
app.listen(port,()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`);
});