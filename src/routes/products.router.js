import express from 'express';
import {
    getProductsController,
    getProductByIdController,
    createProductController,
    updateProductController,
    deleteProductController
} from '../controllers/products.controller.js';

const router = express.Router();

// Ruta para obtener todos los productos
router.get('/', getProductsController);

// Ruta para obtener un producto por su ID
router.get('/:productId', getProductByIdController);

// Ruta para crear un nuevo producto
router.post('/', createProductController);

// Ruta para actualizar un producto existente por su ID
router.put('/:productId', updateProductController);

// Ruta para eliminar un producto existente por su ID
router.delete('/:productId', deleteProductController);

export default router;