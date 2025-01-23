const ex=require ('express');
const router=ex.Router();
const usuariocontrolador=require('../Controllers/UsuarioControllers') //las peticiones que se hacen desde el navegador se conectan a traves de las rutas y las rutas se conectan con los controladores que tienen la logica para resolverlas.


router.get('/',usuariocontrolador.mostrarUsuarios);

router.post('/register',usuariocontrolador.crearUsuario);
router.post('/login', usuariocontrolador.loginUsuario);

router.get('/:id',usuariocontrolador.mostrarUsuario);

router.put('/:id',usuariocontrolador.editarUsuario);

router.delete('/:id',usuariocontrolador.borrarUsuario);

module.exports = router;

//un objeto reques a traves del get nos va a devolver un objeto