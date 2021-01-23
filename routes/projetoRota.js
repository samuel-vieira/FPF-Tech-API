const projetoController = require('../controllers/projetoController')
const ProjetoController = new projetoController()

module.exports = app => {

    app.route('/Projeto')
        .get(ProjetoController.mostra())
        .post(ProjetoController.adiciona())

    app.route('/Projeto/:id')
        .delete(ProjetoController.excluir())
        .patch(ProjetoController.alterar())
}