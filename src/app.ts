import express from 'express';
import ControllerProducts from './database/controller/controller.Products';
import controllerUser from './database/controller/controller.User';

const app = express();

app.use(express.json());

app.post('/products', ControllerProducts.create);
app.get('/products', ControllerProducts.list);
app.get('/users', controllerUser.list);

export default app;
