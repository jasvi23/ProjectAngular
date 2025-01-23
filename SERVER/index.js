//Settings
const express=require('express');
const app=express();//nos devuelve un objeto app que tiene toda la funcionalidad del servidor
const morgan = require('morgan');
const cors=require('cors');

app.use(cors({origin:'http://localhost:4200'}))

const{mongoose}=require('./database.js') //Recojemos la variable mongoose del database

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.set('port',process.env.PORT||3000);
app.listen(app.get('port'),() =>

    {
        console.log("Server en ejecucion",app.get('port'))
    }
    );
    
//Routes, muy importante como se llama y como se crean en MongoDb (con minusculas y en plural)
app.use('/api/Usuario',require('./Routes/usuario.routes.js'));
app.use('/api/Producto',require('./Routes/producto.routes.js'));
app.use('/api/Compra',require('./Routes/compra.routes.js'));