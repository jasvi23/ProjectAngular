const mongoose=require('mongoose');
const{Schema}=mongoose;

const usuarioesquema=new Schema({
    key:{type:Number,required:true},
    username:{type:String,required:true},
    password:{type:String,required:true},
}); 

module.exports=mongoose.model('Usuario',usuarioesquema); //esquema para la base de datos