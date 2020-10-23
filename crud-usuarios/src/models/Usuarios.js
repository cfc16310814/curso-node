const mongoose = require('mongoose');

const UsuariosSchema = new mongoose.Schema({
    
    id_perfil:{
        type: String,
        required: true,
    },
    nome:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
})

mongoose.model('usuarios', UsuariosSchema);