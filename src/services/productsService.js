import Product from '../models/productModel.js';

// Función para actualizar un producto existente
export const updateProductService = async (productId, newData) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(productId, newData, { new: true });
        if (!updatedProduct) {
            throw new Error('Producto no encontrado');
        }
        return updatedProduct;
    } catch (error) {
        throw new Error('Error al actualizar el producto: ' + error.message);
    }
};

// Función para eliminar un producto existente
export const deleteProductService = async (productId) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(productId);
        if (!deletedProduct) {
            throw new Error('Producto no encontrado');
        }
        return { message: 'Producto eliminado exitosamente' };
    } catch (error) {
        throw new Error('Error al eliminar el producto: ' + error.message);
    }
};