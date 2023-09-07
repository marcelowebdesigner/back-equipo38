import jwt from 'jsonwebtoken';

// function to generate the jwt token
export default function generateAccessToken(userId) {
    return jwt.sign({ userId }, process.env.SECRET, { expiresIn: '15m' });
  }