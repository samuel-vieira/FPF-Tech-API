const customExpress = require('./config/config-express')
const mongoose = require('mongoose')
const mongoURI = require('./infra/conexao')

const app = customExpress()

mongoose.connect(mongoURI,{
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology:true
  }).then(() => console.log('Servidor Funcionando...'))
    .catch(erro => console.log(erro))

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})