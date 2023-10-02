import { DataTypes } from 'sequelize';
import database from '../database/connection.js';
// import User from './User.js';

const Certificate = database.define(
  'certificate',
  {
    ce_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ce_training: {
      type: DataTypes.STRING,
    },
    ce_institution: {
      type: DataTypes.STRING,
    },
    ce_year: {
      type: DataTypes.DATEONLY,
    },
  },
  { timestamps: false },
);

export default Certificate;
