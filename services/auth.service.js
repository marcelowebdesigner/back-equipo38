
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Resto del código...


// Función para generar el token JWT
export function generateAccessToken(userId) {
  return jwt.sign({ userId }, process.env.SECRET, { expiresIn: '5m' });
}

export const loginUser = async (email, password) => {
  // Verificar si el usuario está registrado
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

  // Verificar si el usuario está activo
  if (!user.us_active) {
    throw new Error('The user is inactive. Please contact an administrator.');
  }

  // Validar contraseña encriptada
  const isPasswordValid = bcryptjs.compareSync(password, user.us_password);

  if (!isPasswordValid) {
    throw new Error('Incorrect password.');
  }

  // Generar token JWT utilizando la función previamente definida
  const accessToken = generateAccessToken(user.id);

  return {
    user,
    token: accessToken,
  };
};
