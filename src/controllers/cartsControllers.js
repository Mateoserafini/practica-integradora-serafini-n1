import { cartsModel } from '../models/carts.models.js';

// Controlador para obtener todos los carritos
export const getCartsController = async (req, res) => {
    try {
        const carts = await cartsModel.find();
        res.json(carts);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los carritos: ' + error.message });
    }
};

// Controlador para obtener un carrito por su ID
export const getCartByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const cart = await cartsModel.findById(id);
        if (!cart) {
            return res.status(404).json({ error: 'Carrito no encontrado' });
        }
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el carrito: ' + error.message });
    }
};

// Controlador para crear un nuevo carrito
export const createCartController = async (req, res) => {
    try {
        const cart = await cartsModel.create(req.body);
        res.status(201).json(cart);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el carrito: ' + error.message });
    }
};

// Controlador para actualizar un carrito existente por su ID
export const updateCartController = async (req, res) => {
    try {
        const { id } = req.params;
        const cart = await cartsModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!cart) {
            return res.status(404).json({ error: 'Carrito no encontrado' });
        }
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el carrito: ' + error.message });
    }
};

// Controlador para eliminar un carrito por su ID
export const deleteCartController = async (req, res) => {
    try {
        const { id } = req.params;
        const cart = await cartsModel.findByIdAndDelete(id);
        if (!cart) {
            return res.status(404).json({ error: 'Carrito no encontrado' });
        }
        res.json({ message: 'Carrito eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el carrito: ' + error.message });
    }
};
