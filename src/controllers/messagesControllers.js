import { messageModel } from '../models/messageModel.js';

// Controlador para obtener todos los mensajes
export const getMessagesController = async (req, res) => {
    try {
        const messages = await messageModel.find();
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los mensajes: ' + error.message });
    }
};

// Controlador para crear un nuevo mensaje
export const createMessageController = async (req, res) => {
    try {
        const message = await messageModel.create(req.body);
        res.status(201).json(message);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el mensaje: ' + error.message });
    }
};

// Controlador para eliminar un mensaje por su ID
export const deleteMessageController = async (req, res) => {
    try {
        const { id } = req.params;
        const message = await messageModel.findByIdAndDelete(id);
        if (!message) {
            return res.status(404).json({ error: 'Mensaje no encontrado' });
        }
        res.json({ message: 'Mensaje eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el mensaje: ' + error.message });
    }
};