const express =require ('express');
const router=express.Router();
const { productoControlador, upload}=require('../Controllers/ProductoControllers');


router.get('/', productoControlador.mostrarProductos);
router.post('/', upload.single('imagen'), productoControlador.crearProducto);
router.get('/:id', productoControlador.mostrarProducto);
router.put('/:id', upload.single('imagen'), productoControlador.editarProducto);
router.delete('/:id', productoControlador.borrarProducto);

module.exports = router;

//un objeto reques a traves del get nos va a devolver un objeto