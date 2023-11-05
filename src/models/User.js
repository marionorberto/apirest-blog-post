import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'name is required shield',
          },
          len: {
            args: [3, 25],
            msg: 'name must have between 3 to 15 caracters',
          },
        },
      },
      surname: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'surname is required shield',
          },
          len: {
            args: [3, 25],
            msg: 'surname must have between 3 to 15 caracters',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
          msg: 'email must be unique',
        },
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'Is a invalid email',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [8, 50],
            msg: 'password must be between 8 to 50 caracters',
          },
        },
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }, {
      sequelize,
      modelName: 'User',
    });
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 10);
      }
    });
    return this;
  }
}
