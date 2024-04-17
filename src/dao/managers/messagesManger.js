import {
    sendMsg,
    getMsg,
    deleteMsg,
} from '../services/messages.services.js';

export const getControllerMsg = async (req, res) => {
    try {
        const docs = await getMsg();
        res.json(docs);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los mensajes: ' + error.message });
    }
};

export const createControllerMsg = async (req, res) => {
    try {
        const { user, message } = req.body;
        const newDoc = await sendMsg({
            user,
            message
        });
        res.json(newDoc);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el mensaje: ' + error.message });
    }
};

export const deleteControllerMsg = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteMsg(id);
        res.json({ message: '¡Mensaje eliminado exitosamente!' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el mensaje: ' + error.message });
    }
};
