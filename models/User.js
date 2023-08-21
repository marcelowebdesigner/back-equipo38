import { DataTypes } from 'sequelize';
import database from '../database/connection.js';
import Person from './Person.js';

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

User.hasOne(Person, {
  foreignKey: {
    name: 'pe_fk_user',
  },
  sourceKey: 'us_id',
});

Person.belongsTo(User, {
  foreignKey: {
    name: 'pe_fk_user',
  },
});

export default User;
