//Configuracion base de datos 
const mongoose = require('mongoose');
const URI = 'mongodb://localhost/MEAN-SecAdmin'; //Se crea la base de datos 
mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));
module.exports = mongoose;