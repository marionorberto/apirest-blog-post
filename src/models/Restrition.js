import Sequelize, { Model } from 'sequelize';

export default class Restrition extends Model {
  static init(sequelize) {
    super.init({
      id_restrition_sharing: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      restrition: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'public',
        validate: {
          notEmpty: {
            msg: 'not empty restrition allowed',
          },
          len: {
            args: [1, 20],
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
      modelName: 'restritions',
    });

    return this;
  }
}
