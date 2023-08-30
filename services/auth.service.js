import bcryptjs from 'bcryptjs';
import User from '../models/User.js';
import generateAccessToken from '../helpers/generatorJwt.js';

export const loginUser = async (email, password) => {
  try {
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

    // Validate encrypted password
    const isPasswordValid = bcryptjs.compareSync(password, user.us_password);

    if (!isPasswordValid) {
      throw new Error('Incorrect password.');
    }

    // Generate jwt token using previously defined function
    const accessToken = generateAccessToken(user.id);

    return {
      user,     // Make sure "user" is defined here
      token: accessToken,
    };
  } catch (error) {
    throw error; // Re-throw the error to be caught in the controller
  }
};
