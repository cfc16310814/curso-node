const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


const lista = express();
lista.use(express.json());
lista.use(cors());

mongoose.connect("mongodb+srv://claudio:root@cluster0.shhp5.mongodb.net/crud_usuarios?retryWrites=true&w=majority", { 
    useUnifiedTopology: true,
    useNewUrlParser: true
});

requireDir('./src/models');

lista.use('/', require('./src/routes'));

lista.listen(3001);