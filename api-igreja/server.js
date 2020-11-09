const express = require("express");
const mongoose = require("mongoose");
const requireDir = require('require-dir');
const cors = require('cors');

//iniciando o app
const aplicativo = express();
//toda a aplicação deverá ser em json
 aplicativo.use(express.json());

 //habilitar o acesso em outros navegadores
aplicativo.use(cors());

//iniciando o banco de dados
mongoose.connect("mongodb+srv://claudio:root@cluster0.shhp5.mongodb.net/igrejaTeste?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//configurações padrão de pastas
//apenas para mongodb
requireDir('./src/models');

//configuração do nome da rota inicial(pode ser qualquer coisa)
aplicativo.use('/api', require('./src/routes'));

//configuração da porta
aplicativo.listen(1010)
