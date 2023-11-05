import { Router } from 'express';
import HomeController from '../controllers/HomeController';

const route = new Router();

route.get('/', HomeController.index);

export default route;
