import bcryptjs from 'bcryptjs';
import User from '../models/User.js';
import generateAccessToken from '../helpers/generatorJwt.js';

// eslint-disable-next-line import/prefer-default-export
export const loginUser = async (email, password) => {
  // Check if the user is registered
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

  // Check if the user is active
  if (!user.us_active) {
    throw new Error('The user is inactive. Please contact an administrator.');
  }

  // Validate encripted password
  const isPasswordValid = bcryptjs.compareSync(password, user.us_password);

  if (!isPasswordValid) {
    throw new Error('Incorrect password.');
  }

  // Generate jwt token using previously defined function
  const accessToken = await generateAccessToken(user.us_id);

  return {
    user,
    token: accessToken,
  };
};
