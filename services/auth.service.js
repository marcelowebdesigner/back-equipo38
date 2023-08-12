/* eslint-disable import/prefer-default-export */
import bcryptjs from 'bcryptjs';
import User from '../models/User.js';

export const loginService = async (email, password) => {
  // check if user is registered
  const user = await User.findOne({
    where: {
      us_email: email,
    },
  });

  if (!user) {
    throw new Error(
      `There are no users with the email ${email} on the database. Please register or check the email address.`,
    );
  }

  // check if user is active
  if (!user.us_active) {
    throw new Error('The user is inactive. Please contact administrator.');
  }

  // validate encripted password
  const isPasswordValid = bcryptjs.compareSync(password, user.us_password);

  if (!isPasswordValid) {
    throw new Error('Incorrect password.');
  }

  // generate JWT

  return user;
};
