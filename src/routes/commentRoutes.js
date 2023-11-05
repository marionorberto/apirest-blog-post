import { Router } from 'express';
import CommentController from '../controllers/CommentController';

const route = new Router();

route.get('/comment/index', CommentController.index);
route.post('/comment/store', CommentController.store);
route.get('/comment/show/:id', CommentController.show);
route.put('/comment/update/:id', CommentController.update);
route.delete('/comment/delete/:id', CommentController.delete);

export default route;
