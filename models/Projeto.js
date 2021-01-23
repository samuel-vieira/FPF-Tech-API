const mongoose = require('mongoose')

const ProjetoSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    inicio: {
        type: Date,
        required: false
    },
    final: {
        type: Date,
        required: false
    },
    valor: {
        type: Number,
        required: true
    },
    risco: {
        type: Number,
        required: true
    },
    participantes: {
        type: String,
        required: true
    }
})

module.exports = Projeto = mongoose.model('Projeto', ProjetoSchema)