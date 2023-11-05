import { Router } from 'express';
import PostController from '../controllers/PostController';

const route = new Router();

route.get('/post/index', PostController.index);
route.post('/post/store', PostController.store);
route.get('/post/show/:id', PostController.show);
route.put('/post/update/:id', PostController.update);
route.delete('/post/delete/:id', PostController.delete);

export default route;
