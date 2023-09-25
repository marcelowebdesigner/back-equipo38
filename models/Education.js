import { DataTypes } from 'sequelize';
import database from '../database/connection.js';
// import User from './User.js';

const Education = database.define(
  'education',
  {
    ed_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ed_formation: {
      type: DataTypes.STRING,
    },
    ed_institution: {
      type: DataTypes.STRING,
    },
    ed_location: {
      type: DataTypes.STRING,
    },
    ed_startDate: {
      type: DataTypes.DATEONLY,
    },
    ed_endDate: {
      type: DataTypes.DATEONLY,
    },
    ed_description: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false },
);

export default Education;
