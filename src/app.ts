import express from 'express';
import ControllerProducts from './database/controller/controller.Products';

const app = express();

app.use(express.json());

app.post('/products', ControllerProducts.create);
app.get('/products', ControllerProducts.list);

export default app;
