import { Router } from 'express';
import FellingController from '../controllers/FellingController';

const route = new Router();

route.get('/felling/index', FellingController.index);
route.post('/felling/store', FellingController.store);
// route.get('/restrition/show/:id', RestritionController.show);
// route.put('/restrition/update/:id', RestritionController.update);
// route.delete('/restrition/delete/:id', RestritionController.delete);

export default route;
