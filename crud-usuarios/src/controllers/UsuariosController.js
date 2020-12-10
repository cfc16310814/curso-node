const mongoose = require('mongoose');
const Usuarios = mongoose.model('usuarios');


module.exports ={
    async index(req, res){
        const usuarios = await Usuarios.find()
        return res.json(usuarios)
    },
    async show(req, res){
        const usuario = await Usuarios.findById(req.params.id)
        return res.json(usuario)
    },
    async store(req, res){
        const usuarios = await Usuarios.create(req.body);
        return res.json(usuarios);
    },
    async update(req, res){
         const usuarios = await Usuarios.findByIdAndUpdate(req.params.id, req.body, {new: true});
         return res.json(usuarios);

     },
     async delete(req, res){
        const usuarios = await Usuarios.findByIdAndRemove(req.params.id) 
        return res.send();
     }, 
}

