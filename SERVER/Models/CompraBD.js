const mongoose=require('mongoose');
const{Schema}=mongoose;

const compraesquema=new Schema({
    key:{type:Number,required:true},
    userkey:{type:Number,required:true},
    numitems:{type:Number,required:true},
    precio:{type:Number,required:true},
    detalles:{type:String,required:true},
}); 

module.exports=mongoose.model('Compra',compraesquema); 