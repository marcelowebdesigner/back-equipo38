import { loginService } from '../services/auth.service.js';

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await loginService(email, password);

    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};
