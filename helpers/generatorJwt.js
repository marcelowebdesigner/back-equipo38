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
        // Change token duration to 15 minutes before deploy
        expiresIn: '30d',
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
