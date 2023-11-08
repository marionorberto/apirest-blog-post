import Sequelize, { Model } from 'sequelize';

export default class Restrition extends Model {
  static init(sequelize) {
    super.init({
      id_location: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            msg: 'not empty restrition allowed',
          },
          len: {
            args: [1, 40],
            msg: 'must be 1 to 20 caracteres',
          },
        },
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }, {
      sequelize,
      modelName: 'locations',
    });

    return this;
  }
}
