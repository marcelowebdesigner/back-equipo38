import { DataTypes } from 'sequelize';
import database from '../database/connection.js';
import Person from './Person.js';
import Experience from './Experience.js';
import Education from './Education.js';
import Certificate from './Certificate.js';

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

// Establishes the relationship between User and Person
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

User.hasMany(Education, {
  foreignKey: {
    name: 'ed_fk_user',
  },
  sourceKey: 'us_id',
});

Education.belongsTo(User, {
  foreignKey: {
    name: 'ed_fk_user',
  },
});

User.hasMany(Experience, {
  foreignKey: {
    name: 'ex_fk_user',
  },
  sourceKey: 'us_id',
});

Experience.belongsTo(User, {
  foreignKey: {
    name: 'ex_fk_user',
  },
});

User.hasMany(Certificate, {
  foreignKey: {
    name: 'ce_fk_user',
  },
  sourceKey: 'us_id',
});

Certificate.belongsTo(User, {
  foreignKey: {
    name: 'ce_fk_user',
  },
});

export default User;
