/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import database from '../database/connection.js';

import errorHandlerMiddleware from '../middlewares/error-handler.js';

import routerUsers from '../routes/user.routes.js';
import routerAuth from '../routes/auth.routes.js';
import routerPerson from '../routes/person.routes.js';
import routerExperience from '../routes/experience.routes.js';
import routerEducation from '../routes/education.routes.js';
import routerCertificate from '../routes/certificate.routes.js';

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 4000;
    this.usersRoute = '/user';
    this.authRoute = '/auth';
    this.personRoute = '/person';
    this.experienceRoute = '/experience';
    this.educationRoute = '/education';
    this.certificateRoute = '/certificate';
    // Database connection
    this.dbConnection();

    // Middelwares
    this.middelwares();

    // Routes
    this.routes();

    // Error Handler
    this.app.use(errorHandlerMiddleware);
  }

  // eslint-disable-next-line class-methods-use-this
  async dbConnection() {
    try {
      await database.sync();
      // await database.sync({ alter: true });
      console.log('Connection to the database was established successfully.');
    } catch (error) {
      throw new Error(error);
    }
  }

  middelwares() {
    // Cors
    this.app.use(cors());

    // JSON - reading and parsing body
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.usersRoute, routerUsers);
    this.app.use(this.authRoute, routerAuth);
    this.app.use(this.personRoute, routerPerson);
    this.app.use(this.experienceRoute, routerExperience);
    this.app.use(this.educationRoute, routerEducation);
    this.app.use(this.certificateRoute, routerCertificate);
  }

  listen() {
    this.app.listen(this.port, () => {
      // eslint-disable-next-line no-console
      console.log('Server running from port', this.port);
    });
  }
}

export default Server;
