const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')


module.exports = () => {
    //App
    const app = express()

    //Middleware
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: false}))

    //Routes
    consign()
        .include('routes')
        .into(app)

    return app
}

