import Sequelize, { Model } from 'sequelize';

export default class Felling extends Model {
  static init(sequelize) {
    super.init({
      id_fellings_activity: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      fellings_activity: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'not empty felling_activity allowed',
          },
          len: {
            args: [1, 30],
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
      modelName: 'fellings',
    });

    return this;
  }
}
