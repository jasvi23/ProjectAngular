const mongoose=require ('mongoose');
const URI = 'mongodb://127.0.0.1:27017/ProyectoAngular'; 

mongoose.connect(URI) //enlace con la base de datos
    .then(db => console.log('Conectado a la base de datos'))
    .catch(err => console.error(err))   



module.exports=mongoose;