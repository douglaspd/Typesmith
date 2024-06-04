import express from 'express';
import ControllerProducts from './controller/controller.Products';
import controllerUser from './controller/controller.User';
import controlleLogin from './controller/controlle.Login';

const app = express();

app.use(express.json());

app.post('/products', ControllerProducts.create);
app.get('/products', ControllerProducts.list);
app.get('/users', controllerUser.list);
app.post('/login', controlleLogin.VerifyLogin);

export default app;
