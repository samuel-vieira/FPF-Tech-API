const projetoRota = require('./projetoRota')

module.exports = app => {

    projetoRota(app)

    app.get('/', (req, res) => {
        res.send('Hello World')
    })
}