const express  = require ('express');
const morgan = require('morgan');
const app = express();
const{ mongoose } = require('./databases');

//Configuracion del servidor
app.set('port', process.env.PORT || 3000);
//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/usuarios' ,require('./Routs/admin_routes'));
//Iniciando servicios

app.listen(app.get('port'), () => {
    console.log('server on port',app.get('port'));
});
