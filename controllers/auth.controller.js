import { loginUser } from '../services/auth.service.js';

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const { user, token } = await loginUser(email, password);

    if (user) {
      // If login was successful and you have a user
      console.log('Valid token. User information:', user);

      // ... Additional logic after successful authentication
      res.status(200).json({ message: 'Authentication successful', token });
    } else {
      // If login failed
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    next(error);
  }
};

export default login;
