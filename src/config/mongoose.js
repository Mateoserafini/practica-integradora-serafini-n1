import mongoose from 'mongoose';

const connectionString = 'mongodb+srv://matuserafini:45089673@cluster0.frnygq1.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0';

try {
    await mongoose.connect(connectionString);
    console.log('Conectado a MongoDB'); // Mensaje de éxito si la conexión se establece correctamente
} catch (error) {
    console.log('Error en la conexión a MongoDB: ' + error); // Mensaje de error si hay un problema al conectar
}