const controladorUsuario={}; //Creación del objeto que contiene las funciones del controlador
const usuarioModels=require('../Models/UsuarioBD'); //Importamos el modelo de la base de datos


controladorUsuario.mostrarUsuarios= async(req,res) => {
    const leerusuario = await usuarioModels.find();
    res.json(leerusuario);
 };
 
 controladorUsuario.crearUsuario=async(req,res)=>
 {
     const nuevousuario=new usuarioModels(req.body);
     await nuevousuario.save();
     res.json('Usuario Guardado');
 };

 controladorUsuario.mostrarUsuario=async(req,res)=>
 {
     const buscarUsuario=await usuarioModels.findById(req.params.id);
     res.json(buscarUsuario);
 };

 controladorUsuario.buscarUsuario=async(req,res)=>
 {       
    const usuarioencontrado = await usuarioModels.findOne({key: req.params.key});
        if (usuarioencontrado) {
            res.json (usuarioencontrado);
            console.log("Dentro");
        } else {
            res.status(404).json({ success: false, message: 'Usuario o contraseña inválidos' });
        }
        
 };

 controladorUsuario.editarUsuario=async(req,res)=>
 {
     const {id}=req.params;
     const usuarioedit={
        username:req.body.nombre,
        password:req.body.contraseña,
     };
     await usuarioModels.findByIdAndUpdate(id,{$set:usuarioedit})
     res.json("Usuario Actualizado");
 };

 controladorUsuario.borrarUsuario=async(req,res)=>
 {
  const borrarUsuario=await usuarioModels.findByIdAndDelete(req.params.id);
  res.json(borrarUsuario);

 };
 
 controladorUsuario.loginUsuario = async (req, res) => {
    const { username, password } = req.body;
    const usuario = await usuarioModels.findOne({ username, password });
    if (usuario) {
        res.json({ user: usuario});
    } else {
        res.status(401).json({ message: 'Usuario o contraseña inválidos' });
    }
};
 
 module.exports = controladorUsuario; 