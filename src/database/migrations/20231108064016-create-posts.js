/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posts', {
      id_post: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      post_content: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'not allowed empty post',
          },
          len: {
            args: [1, 300],
            msg: 'max length allow is 1 to 300 caracteres',
          },
        },
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'not allowed empty title',
          },
          len: {
            args: [1, 20],
            msg: 'max length allow is 1 to 20 caracteres',
          },
        },
      },
      location_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'locations',
          key: 'id_location',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      felling_activity_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'fellings',
          key: 'id_fellings_activity',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      restrition_sharing_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'restritions',
          key: 'id_restrition_sharing',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('posts');
  },
};
