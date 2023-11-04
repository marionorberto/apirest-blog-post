require('dotenv').config();

module.exports = {
  dialect: 'mariadb',
  database: process.env.DATABASE,
  username: process.env.DATABASE.USERNAME,
  password: process.env.DATABASE.PASSWORD,
  host: process.env.DATABASE.HOST,
  port: process.env.DATABASE.PORT,
  define: {
    underscored: true,
    underscoredAll: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
