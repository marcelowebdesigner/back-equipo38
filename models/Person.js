import { DataTypes } from 'sequelize';
import database from '../database/connection.js';
// import User from './User.js';

const Person = database.define(
  'person',
  {
    pe_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pe_name: {
      type: DataTypes.STRING,
    },
    pe_lastName: {
      type: DataTypes.STRING,
    },
    pe_address: {
      type: DataTypes.STRING,
    },
    pe_email: {
      type: DataTypes.STRING,
    },
    pe_phone: {
      type: DataTypes.INTEGER,
    },
    pe_image: { 
      type: DataTypes.STRING, 
    },
    pe_completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  { timestamps: false },
);

export default Person;
