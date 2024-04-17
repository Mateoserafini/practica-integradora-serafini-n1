import { cartsModel } from '../models/carts.models.js';

// Función para obtener todos los carritos
export const getAllCartsService = async () => {
    try {
        const carts = await cartsModel.find();
        return carts;
    } catch (error) {
        throw new Error('Error al obtener los carritos: ' + error.message);
    }
};

// Función para obtener un carrito por su ID
export const getCartByIdService = async (cartId) => {
    try {
        const cart = await cartsModel.findById(cartId);
        if (!cart) {
            throw new Error('Carrito no encontrado');
        }
        return cart;
    } catch (error) {
        throw new Error('Error al obtener el carrito: ' + error.message);
    }
};

// Función para crear un nuevo carrito
export const createCartService = async (cartData) => {
    try {
        const newCart = await cartsModel.create(cartData);
        return newCart;
    } catch (error) {
        throw new Error('Error al crear el carrito: ' + error.message);
    }
};

// Función para agregar un producto a un carrito existente
export const addProductToCartService = async (cartId, productId) => {
    try {
        // Buscar el carrito por su ID
        const cart = await cartsModel.findById(cartId);
        
        // Verificar si el carrito existe
        if (!cart) {
            throw new Error('Carrito no encontrado');
        }

        // Buscar el producto por su ID (aquí asumo que tienes un modelo de producto llamado `productModel`)
        const product = await productModel.findById(productId);
        
        // Verificar si el producto existe
        if (!product) {
            throw new Error('Producto no encontrado');
        }

        // Agregar el producto al carrito (aquí asumo que tienes una propiedad `products` en tu modelo de carrito)
        cart.products.push(product);

        // Guardar el carrito actualizado en la base de datos
        const updatedCart = await cart.save();

        return updatedCart;
    } catch (error) {
        throw new Error('Error al agregar el producto al carrito: ' + error.message);
    }
};

// Función para actualizar un carrito existente por su ID
export const updateCartService = async (cartId, newData) => {
    try {
        const updatedCart = await cartsModel.findByIdAndUpdate(cartId, newData, { new: true });
        if (!updatedCart) {
            throw new Error('Carrito no encontrado');
        }
        return updatedCart;
    } catch (error) {
        throw new Error('Error al actualizar el carrito: ' + error.message);
    }
};

// Función para eliminar un carrito existente por su ID
export const deleteCartService = async (cartId) => {
    try {
        const deletedCart = await cartsModel.findByIdAndDelete(cartId);
        if (!deletedCart) {
            throw new Error('Carrito no encontrado');
        }
        return { message: 'Carrito eliminado exitosamente' };
    } catch (error) {
        throw new Error('Error al eliminar el carrito: ' + error.message);
    }
};