const mongoose=require('mongoose');
const { Schema } = mongoose;

const productoesquema=new Schema({
    key:{type:Number,required:true},
    nombre:{type:String,required:true},
    precio:{type:Number,required:true},
    categoria:{type:String,required:true},
    imagen:{type:String,required:true},
}); 

module.exports=mongoose.model('Producto',productoesquema); 