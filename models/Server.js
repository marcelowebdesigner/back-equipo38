/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import database from '../database/connection.js';

import errorHandlerMiddleware from '../middlewares/error-handler.js';
import routerUsers from '../routes/user.routes.js';

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 4000;
    this.usersRoute = '/user';

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
      // await database.authenticate();
      await database.sync();
      // to drop all the tables and create again
      // await database.sync({ force: true });
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
  }

  listen() {
    this.app.listen(this.port, () => {
      // eslint-disable-next-line no-console
      console.log('Server running from port', this.port);
    });
  }
}

export default Server;