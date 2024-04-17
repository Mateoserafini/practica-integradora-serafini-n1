import express from 'express';
import { ProductManager } from './controllers/productsControllers.js';
import { CartManager } from './controllers/cartsControllers.js';
import { MessageManager } from './controllers/messagesControllers.js';
import { productsRouter } from './routes/products.router.js';
import { cartsRouter } from './routes/carts.router.js';
import { messagesRouter } from './routes/messages.router.js'; 
import { viewsRouter } from './routes/views.router.js';
import { engine } from 'express-handlebars';
import { Server } from 'socket.io';
import http from 'http';
import mongoose from './mongoose.js'; 

const app = express();
const PORT = 8080;

export const productManager = new ProductManager();
export const cartManager = new CartManager();
export const messageManager = new MessageManager(); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);
app.use('/api/messages', messagesRouter); 
app.use('/', viewsRouter);

const server = http.createServer(app);
const socketServer = new Server(server); 

server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});