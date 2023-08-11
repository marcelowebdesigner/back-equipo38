import { DataTypes } from 'sequelize';
import database from '../database/connection.js';

const User = database.define('user', {
  us_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  us_name: {
    type: DataTypes.STRING,
  },
  us_email: {
    type: DataTypes.STRING,
  },
  us_password: {
    type: DataTypes.STRING,
  },
  us_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

export default User;
