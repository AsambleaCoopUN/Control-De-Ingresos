const express = require('express');
const router = express.Router();
const conexion = require('./db/coexion');

router.get('/', (req, res)=>{
  res.render('index');
})