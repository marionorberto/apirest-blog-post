import express from 'express';
import homeRoutes from './routes/homeRoutes';

class App {
  constructor() {
    this.app = express();
    this.routes();
    this.middlewares();
  }

  routes() {
    this.app.use(homeRoutes);
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
}

export default new App().app;
