import express from 'express';
import {
    getCartsController,
    getCartByIdController,
    createCartController,
    addProductToCartController,
    updateCartController,
    deleteCartController
} from '../controllers/carts.controller.js';

const router = express.Router();

// Ruta para obtener todos los carritos
router.get('/', getCartsController);

// Ruta para obtener un carrito por su ID
router.get('/:cartId', getCartByIdController);

// Ruta para crear un nuevo carrito
router.post('/', createCartController);

// Ruta para agregar un producto a un carrito existente
router.put('/:cartId/add-product/:productId', addProductToCartController);

// Ruta para actualizar un carrito existente por su ID
router.put('/:cartId', updateCartController);

// Ruta para eliminar un carrito existente por su ID
router.delete('/:cartId', deleteCartController);

export default router;