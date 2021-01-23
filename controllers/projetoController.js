const Projetos = require('../models/Projeto')

class Projeto{

    mostra(){
        return(req, res) => {
            Projetos.find()
                .then(projeto => res.json(projeto))
                .catch(erro => console.log(erro))
        }
    }

    adiciona(){
        return(req, res) => {
            const newProjeto = req.body
        
            Projetos.create(newProjeto)
                .then(projeto => res.json(projeto))
                .catch(erro => console.log(erro))
        }
    }

    excluir(){
        return(req, res) => {
            const id = req.params.id

            Projetos.findByIdAndDelete(id)
                .then( () => res.status(200).json({success: true}))
                .catch(erro => res.status(404).json({success:false}).send(erro))
        }
    }

    alterar(){
        return(req, res) => {
            const id = req.params.id
            const valores = req.body

            Projetos.findByIdAndUpdate(id)
                .then( () => res.send(valores))
                .catch(erro => res.send(erro))
        }
    }
}

module.exports = Projeto