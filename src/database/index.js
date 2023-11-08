import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import Restrition from '../models/Restrition';
import Felling from '../models/Felling';
import Location from '../models/Location';

const models = [User, Restrition, Felling, Location];
const databaseConnection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(databaseConnection));
models.forEach((model) => model.associate && model.associate(databaseConnection.model));
