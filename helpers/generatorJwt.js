import jwt from 'jsonwebtoken';

// function to generate the jwt token
export default function generateAccessToken(id) {
  return new Promise((resolve, reject) => {
    const payload = { id };
    // console.log(payload);

    jwt.sign(
      payload,
      process.env.SECRETKEY,
      {
        expiresIn: '15m',
      },
      (error, token) => {
        if (error) {
          reject(error);
        } else {
          resolve(token);
        }
      },
    );
  });
}
