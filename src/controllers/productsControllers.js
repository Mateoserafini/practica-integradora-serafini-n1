import Product from '../models/productModel.js';

// Controlador para obtener todos los productos
export const getProductsController = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos: ' + error.message });
    }
};

// Controlador para obtener un producto por su ID
export const getProductsByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el producto: ' + error.message });
    }
};

// Controlador para crear un nuevo producto
export const createProductsController = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el producto: ' + error.message });
    }
};

// Controlador para actualizar un producto existente por su ID
export const updateProductsController = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el producto: ' + error.message });
    }
};

// Controlador para eliminar un producto por su ID
export const deleteProductsController = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json({ message: 'Producto eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el producto: ' + error.message });
    }
};
