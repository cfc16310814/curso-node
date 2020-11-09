const mongoose = require('mongoose');
const MembrosModel = mongoose.model('Membros');

module.exports = {
    // assicrono trabalha com duas ou mais tarefas(funções paralelamente)
    //sincrono trabalha com uma tarefa por vez
    async lista(req, res ){
       //criar uma varial
        //informar ao mongo que está sendo solicitado um "SELECT * FROM"
        //o resultado que obter, salva na nova variavel
        
        const liataDeMembros = await MembrosModel.find(); // o find do mongodb é o select*from
        
        //retorno em forma json
        return res.json(liataDeMembros);
    },
    async salvarMembro(req, res){
        const novoMembro = await MembrosModel.create(req.body);
       
        return res.json(novoMembro);
    },
}