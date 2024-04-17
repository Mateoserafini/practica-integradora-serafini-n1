import {
    addServices,
    getServices,
    getServicesById,
    updateServices,
    deleteServices
} from '../services/products.services.js';

export const getController = async (req, res) => {
    try {
        const docs = await getServices();
        res.json(docs);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos: ' + error.message });
    }
};

export const getByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const doc = await getServicesById(id);
        res.json(doc);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el producto: ' + error.message });
    }
};

export const createController = async (req, res) => {
    try {
        const { title, description, stock, img, category, price, code } = req.body;
        const newDoc = await addServices({
            title,
            description,
            stock,
            img,
            category,
            price,
            code
        });
        res.json(newDoc);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el producto: ' + error.message });
    }
};

export const updateController = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, stock, img, category, price, code } = req.body;
        await getServicesById(id); // Asumiendo que esta función lanza un error si el producto no se encuentra
        const docUpd = await updateServices(id, {
            title,
            description,
            stock,
            img,
            category,
            price,
            code
        });
        res.json(docUpd);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el producto: ' + error.message });
    }
};

export const deleteController = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteServices(id);
        res.json({ message: '¡Producto eliminado exitosamente!' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el producto: ' + error.message });
    }
};
