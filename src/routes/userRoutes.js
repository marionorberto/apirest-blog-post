import { Router } from 'express';
import UserController from '../controllers/UserController';

const route = new Router();

route.get('/user/index', UserController.index);
route.post('/user/store', UserController.store);
route.get('/user/show/:id', UserController.show);
route.put('/user/update/:id', UserController.update);
route.delete('/user/delete/:id', UserController.delete);

export default route;
