import dotenv from 'dotenv';
dotenv.config();
import './database';

import express from 'express';
import homeRoutes from './routes/homeRoutes';
import tokenRoutes from './routes/tokenRoutes';
import userRoutes from './routes/userRoutes';
import restritionRoutes from './routes/restritionRoutes';
import fellingRoutes from './routes/fellingRoutes';
import locationRoutes from './routes/locationRoutes';
// import postRoutes from './routes/postRoutes';
// import commentRoutes from './routes/commentRoutes';

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
    this.app.use(restritionRoutes);
    this.app.use(fellingRoutes);
    this.app.use(locationRoutes);
    // this.app.use(commentRoutes);
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
}

export default new App().app;
