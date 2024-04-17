import express from 'express';
import {
    getMessagesController,
    getMessageByIdController,
    createMessageController,
    updateMessageController,
    deleteMessageController
} from '../controllers/messages.controller.js';

const router = express.Router();

// Ruta para obtener todos los mensajes
router.get('/', getMessagesController);

// Ruta para obtener un mensaje por su ID
router.get('/:messageId', getMessageByIdController);

// Ruta para crear un nuevo mensaje
router.post('/', createMessageController);

// Ruta para actualizar un mensaje existente por su ID
router.put('/:messageId', updateMessageController);

// Ruta para eliminar un mensaje existente por su ID
router.delete('/:messageId', deleteMessageController);

export default router;