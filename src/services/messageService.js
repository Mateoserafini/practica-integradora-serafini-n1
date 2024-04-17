import { messageModel } from '../models/messageModel.js';

// Función para obtener todos los mensajes
export const getAllMessagesService = async () => {
    try {
        const messages = await messageModel.find();
        return messages;
    } catch (error) {
        throw new Error('Error al obtener los mensajes: ' + error.message);
    }
};

// Función para obtener un mensaje por su ID
export const getMessageByIdService = async (messageId) => {
    try {
        const message = await messageModel.findById(messageId);
        if (!message) {
            throw new Error('Mensaje no encontrado');
        }
        return message;
    } catch (error) {
        throw new Error('Error al obtener el mensaje: ' + error.message);
    }
};

// Función para crear un nuevo mensaje
export const createMessageService = async (messageData) => {
    try {
        const newMessage = await messageModel.create(messageData);
        return newMessage;
    } catch (error) {
        throw new Error('Error al crear el mensaje: ' + error.message);
    }
};

// Función para actualizar un mensaje existente por su ID
export const updateMessageService = async (messageId, newData) => {
    try {
        const updatedMessage = await messageModel.findByIdAndUpdate(messageId, newData, { new: true });
        if (!updatedMessage) {
            throw new Error('Mensaje no encontrado');
        }
        return updatedMessage;
    } catch (error) {
        throw new Error('Error al actualizar el mensaje: ' + error.message);
    }
};

// Función para eliminar un mensaje existente por su ID
export const deleteMessageService = async (messageId) => {
    try {
        const deletedMessage = await messageModel.findByIdAndDelete(messageId);
        if (!deletedMessage) {
            throw new Error('Mensaje no encontrado');
        }
        return { message: 'Mensaje eliminado exitosamente' };
    } catch (error) {
        throw new Error('Error al eliminar el mensaje: ' + error.message);
    }
};