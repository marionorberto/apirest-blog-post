import Sequelize, { Model } from 'sequelize';

export default class Post extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      post: {
        type: Sequelize.STRING,
        allowNUll: false,
        validate: {
          notNull: {
            msg: 'no empty post allowed',
          },
          len: {
            args: [1, 250],
            msg: 'the post must be betwenn 1 to 250 caracteres',
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
      sequelize, modelName: 'Post',
    });
  }
}
