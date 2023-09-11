import { loginUser } from '../services/auth.service.js';

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await loginUser(email, password);

    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

export default login;
