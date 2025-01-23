const multer = require('multer');
const path = require('path');
const controladorProducto = {};
const productoModels = require('../Models/ProductoBD');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

controladorProducto.mostrarProductos = async (req, res) => {
    const leerProducto = await productoModels.find();
    res.json(leerProducto);
};

controladorProducto.crearProducto = async (req, res) => {
    const nuevoProducto = new productoModels({
        key: req.body.key,
        nombre: req.body.nombre,
        precio: req.body.precio,
        categoria: req.body.categoria,
        imagen: req.file ? req.file.path : null // Guarda la ruta de la imagen si existe
    });
    await nuevoProducto.save();
    res.json('Producto Guardado');
};

controladorProducto.mostrarProducto = async (req, res) => {
    const buscarProducto = await productoModels.findById(req.params.id);
    res.json(buscarProducto);
};

controladorProducto.editarProducto = async (req, res) => {
    const { id } = req.params;
    const productoEdit = {
        nombre: req.body.nombre,
        precio: req.body.precio,
        categoria: req.body.categoria,
        imagen: req.file ? req.file.path : req.body.imagen // Actualiza la ruta de la imagen si se proporciona una nueva
    };
    await productoModels.findByIdAndUpdate(id, { $set: productoEdit });
    res.json("Producto Actualizado");
};

controladorProducto.borrarProducto = async (req, res) => {
    const borrarProducto = await productoModels.findByIdAndDelete(req.params.id);
    res.json(borrarProducto);
};

module.exports = { 
    productoControlador: controladorProducto, 
    upload 
};