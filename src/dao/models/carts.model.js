import mongoose from 'mongoose';

const cartsSchema = new mongoose.Schema({
    carts: { type: Array, required: true, default : [] }

});


const cartsModel = mongoose.model("usuarios", cartsSchema);
export default cartsModel;