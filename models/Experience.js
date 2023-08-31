import { DataTypes } from 'sequelize';
import database from '../database/connection.js';

const Experience = database.define(
  'experience',
  {
    ex_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ex_position: {
      type: DataTypes.STRING,
    },
    ex_startDate: {
      type: DataTypes.DATEONLY,
    },
    ex_finishDate: {
      type: DataTypes.DATEONLY,
    },
    ex_companyName: {
      type: DataTypes.STRING,
    },
    ex_description: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false },
);

export default Experience;
