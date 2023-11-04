import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

const database = new Sequelize(databaseConfig);

const models = [];

models.forEach((model) => model.connection(database));
