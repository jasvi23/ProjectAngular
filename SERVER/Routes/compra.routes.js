const express = require ('express');
const router=express.Router();
const compraControlador = require('../Controllers/CompraControllers'); // Importamos el controlador de Compra

router.get('/', compraControlador.mostrarCompras);
router.post('/', compraControlador.crearCompra);
router.get('/:id', compraControlador.mostrarCompra);
router.put('/:id', compraControlador.editarCompra);
router.delete('/:id', compraControlador.borrarCompra);

module.exports = router;

//un objeto reques a traves del get nos va a devolver un objeto