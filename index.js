/* constantes de invocación al servidor */
const express = require ("express");
const app = express();

/* definición de ruta y puerto del servidor de pruebas */
app.listen(8886, ()=>{
    console.log('Servidor corriendo en el http://localhost:8886');
});

/*Carpeta pública */
app.use(express.static('public'));

/* establecer las carpetas estáticas */
app.use(express.static(__dirname + '/node_modules/bootstrap/'));
app.use(express.static(__dirname + '/node_modules/jquery/'));
app.use(express.static(__dirname + '/public/'));

/* indicación para la captura de datos con método post */
const { json } = require("express");
app.use(express.urlencoded({extended:false}));
app.use(express.json());

/* EJS como motor de plantillas*/
app.set('view engine','ejs');

/* llamado del enrrutador */
app.use('/', require('./router'));