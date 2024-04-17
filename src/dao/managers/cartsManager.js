import {
    getCartService,
    getCartByIdService,
    createCartService,
    addProductToCartService
} from '../services/carts.services.js'

export const getCartsController = async (req, res) => {
    try {
        const docs = await getCartService();
        res.json(docs)
    } catch (error) {
        res.status(500).json({ error: 'Error al leer los carritos: ' + error.message });
    }
}

export const getCartByIdController = async (req, res) => {
    try {
        const docs = await getCartByIdService(Number(cid))
        res.json(docs)
    } catch (error) {
        res.status(500).json({ error: 'Error al leer el carrito por id: ' + error.message });
    }
}

export const createCartController = async (req, res) => {
    try {
        const docs = await createCartService();
        res.json(docs)
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el carrito: ' + error.message });
    }
}

export const addProductToCartController = async (req, res) => {
    try {
        const { cid, pid } = req.params;
        const product = await addProductToCartService(cid, pid);
        res.json(product)
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar un producto a un carrito: ' + error.message });
    }
};