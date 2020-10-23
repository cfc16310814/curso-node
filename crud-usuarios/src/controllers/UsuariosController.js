const mongoose = require('mongoose');
const Usuarios = mongoose.model('usuarios');


module.exports ={
    async index(req, res){
        const usuarios = usuarios.find()
        return res.json(usuarios)
    },
   
    async store(req, res){
        const usuarios = await Usuarios.create(req.body);
        return res.json(usuarios);
    },
}

