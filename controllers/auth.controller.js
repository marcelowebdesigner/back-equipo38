import { loginUser } from '../services/auth.service.js';
import generateAccessToken from '../helpers/generatorJwt.js'; // Import the function without curly braces
import { validateAccessToken } from '../helpers/validatorJwt.js';

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await loginUser(email, password);

    if (user) {
      // If login was successful and you have a user

      // Generate the token after successful authentication
      const token = generateAccessToken(user.id); // Assuming user.id is the user's unique identifier

      const decodedToken = validateAccessToken(token);

      if (decodedToken) {
        // The token is valid
        console.log('Valid token. User information:', decodedToken);
        // ... Additional logic after successful authentication
        res.status(200).json({ message: 'Authentication successful', token });
      } else {
        // The token is not valid
        console.log('Invalid token.');
        res.status(401).json({ message: 'Authentication failed' });
      }

    } else {
      // If login failed
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    next(error);
  }
};

export default login;
