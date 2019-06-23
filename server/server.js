require('./config/config')
const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/trip'))

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true }, (err, res) => {

    if (err) throw err;

    console.log('Base de Datos ONLINE');

});
app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto', process.env.PORT)
})