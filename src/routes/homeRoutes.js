import { Router } from 'express';
import HomeController from '../controllers/HomeController';

const route = new Router();

route.get('/', HomeController.index);
route.post('/store', HomeController.store);
route.get('/show/:id', HomeController.show);
route.put('/update/:id', HomeController.update);
route.delete('/delete/:id', HomeController.delete);

export default route;
