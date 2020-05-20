//require
var express = require('express');
var mongoose = require('mongoose');
//inicializar variables
var app = express();

//conexion a la base de datos
mongoose.set('useUnifiedTopology', true);

mongoose.connection.openUri('mongodb+srv://dbOscar:40730@cluster0-z9imw.gcp.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true} ,(err,res)=>{
    if (err) throw err;

    console.log('base de datos :  \x1b[32m%s\x1b[0m', 'online');
})

//rutas

app.get('/',(req,res)=>{
    res.status(200).json({
        ok: true,
        mensaje: 'peticion realizada correctamente0'
    })
})

//servidor

app.listen(3000,()=>{
    console.log('Expres server en puerto 3000: \x1b[32m%s\x1b[0m', 'online');
})