import {
  createUserService,
  deleteUserService,
  getAllService,
  getUserByIdService,
} from '../services/user.service.js';

export const getUserById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await getUserByIdService(id);

    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllService();
    res.status(200).json({
      users,
    });
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  const { userName, email, password } = req.body;

  try {
    const newUser = await createUserService(userName, email, password);

    res.status(201).json({ newUser });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await deleteUserService(id);

    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};
