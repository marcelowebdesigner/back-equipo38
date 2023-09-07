import jwt from 'jsonwebtoken';
// Function to validate JWT token
export function validateAccessToken(token) {
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    return decoded;
  } catch (error) {
    // Token validation failed
    return null;
  }
}