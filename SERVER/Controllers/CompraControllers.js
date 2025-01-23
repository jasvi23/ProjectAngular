const controladorCompra = {}; // Creación del objeto que contiene las funciones del controlador
const compraModels = require('../Models/CompraBD'); // Importamos el modelo de la base de datos

controladorCompra.mostrarCompras = async (req, res) => {
    const leerCompra = await compraModels.find();
    res.json(leerCompra);
};

controladorCompra.crearCompra = async (req, res) => {
    const nuevaCompra = new compraModels(req.body);
    await nuevaCompra.save();
    res.json('Compra Guardada');
};

controladorCompra.mostrarCompra = async (req, res) => {
    const buscarCompra = await compraModels.findById(req.params.id);
    res.json(buscarCompra);
};

controladorCompra.buscarCompra = async (req, res) => {
    const compraEncontrada = await compraModels.findOne({ key: req.params.key });
    if (compraEncontrada) {
        res.json(compraEncontrada);
        console.log("Dentro");
    } else {
        res.status(404).json({ success: false, message: 'Compra no encontrada' });
    }
};

controladorCompra.editarCompra = async (req, res) => {
    const { id } = req.params;
    const compraEdit = {
        userkey: req.body.userkey,
        numitems: req.body.numitems,
        precio: req.body.precio,
        detalles: req.body.detalles,
    };
    await compraModels.findByIdAndUpdate(id, { $set: compraEdit });
    res.json("Compra Actualizada");
};

controladorCompra.borrarCompra = async (req, res) => {
    const borrarCompra = await compraModels.findByIdAndDelete(req.params.id);
    res.json(borrarCompra);
};

module.exports = controladorCompra;