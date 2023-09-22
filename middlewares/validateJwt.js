import jwt from 'jsonwebtoken';

const jwtValidator = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    throw new Error('Token is required for the request');
  }

  try {
    const { id } = jwt.verify(token, process.env.SECRETKEY);

    // user.us_id is sent to request, from the token payload
    req.id = id;

    next();
  } catch (error) {
    throw new Error('Token is Invalid.');
  }
};

export default jwtValidator;
