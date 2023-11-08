import { Router } from 'express';
import LocationController from '../controllers/LocationController';

const route = new Router();

route.get('/location/index', LocationController.index);
route.post('/location/store', LocationController.store);
// route.get('/restrition/show/:id', RestritionController.show);
// route.put('/restrition/update/:id', RestritionController.update);
// route.delete('/restrition/delete/:id', RestritionController.delete);

export default route;
