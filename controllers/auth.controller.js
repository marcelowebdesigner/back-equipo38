import { loginUser } from '../services/auth.service.js'; // Cambio aquí

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await loginUser(email, password); // Cambio aquí

    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

export default login;
