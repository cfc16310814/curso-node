//importando ferramentas
const mongoose = require('mongoose');

//quando for uma class ou instancia deverá ser iniciado com letra "maicula"
//não é obrigação, mas sim, uma recomendação
const MembrosTabela = new mongoose.Schema({
    nome: {
        type: String,
        require: true // dizendo se é notnull true para sim e false para não.
    },
    categoria: {
        type: String,
        require: true // dizendo se é notnull true para sim e false para não.
    },
    temCarteirinha: {
        type: Number,
        require: true // dizendo se é notnull true para sim e false para não.
    },
    fazCurso: {
        type: Number,
        require: false // dizendo se é notnull true para sim e false para não.
    },
})
mongoose.model('Membros', MembrosTabela);