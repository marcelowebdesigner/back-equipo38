/* eslint-disable import/no-extraneous-dependencies */
import { Sequelize } from 'sequelize';

const database = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.HOST,
    dialect: 'mysql',
    // show SQL commands on console
    logging: false,
  },
);

export default database;
