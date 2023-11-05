import dotenv from 'dotenv';
dotenv.config();
import './database';

import express from 'express';
import homeRoutes from './routes/homeRoutes';
import tokenRoutes from './routes/tokenRoutes';
import postRoutes from './routes/postRoutes';
import userRoutes from './routes/userRoutes';
import commentRoutes from './routes/commentRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  routes() {
    this.app.use(homeRoutes);
    this.app.use(userRoutes);
    this.app.use(tokenRoutes);
    this.app.use(postRoutes);
    this.app.use(commentRoutes);
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
}

export default new App().app;
