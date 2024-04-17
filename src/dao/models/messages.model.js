import mongoose from 'mongoose';

const messagesSchema = new mongoose.Schema({
    user: { type: String, required: true },
    message: { type: String, required: true }
});


const messageModel = mongoose.model("usuarios", messagesSchema);
export default messageModel;
