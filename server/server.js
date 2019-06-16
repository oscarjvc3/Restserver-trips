require('./config/config')
const express = require('express')
const app = express()
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/trips', function(req, res) {
    res.json('get trips')
})

app.post('/trips', function(req, res) {
    let body = req.body;
    if (body.id_trip === undefined) {
        res.status(400).json({
            ok: false,
            messaje: 'El id del viaje es necesario'
        })
    } else {
        res.json({
            body
        })
    }

})

app.put('/trips/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    })
})

app.delete('/trips', function(req, res) {
    res.json('get trips')
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto', process.env.PORT)
})