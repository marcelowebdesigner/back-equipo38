import User from '../models/User.js';

export const getAllService = async () => {
  const users = await User.findAll({
    where: {
      us_active: true,
    },
  });

  if (users.length < 1) {
    throw new Error('There are no active users on the database.');
  }

  return users;
};

export const createUserService = async (userName, email, password) => {
  const checkUser = await User.findOne({
    where: {
      us_email: email,
    },
  });

  if (checkUser) {
    throw new Error(
      `The email address ${email} is already registered. Try to log in with your username and password.`,
    );
  }

  // HACER ENCRYPTACION PASS Y MANDARLO ENCRYPTADO A LA DB!!!

  const newUser = await User.create({
    us_name: userName,
    us_email: email,
    us_password: password,
    us_active: true,
  });

  return newUser;
};

export const deleteUserService = async (id) => {
  const user = await User.findByPk(id, {
    where: {
      us_active: true,
    },
  });

  if (!user) {
    throw new Error(`There are no active users with the id ${id}`);
  }

  user.us_active = false;

  await user.save();

  return user;
};
