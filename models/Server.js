/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import database from '../database/connection.js';

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 4000;

    // Database connection
    this.dbConnection();

    // Middelwares
    this.middelwares();
  }

  // eslint-disable-next-line class-methods-use-this
  async dbConnection() {
    try {
      await database.authenticate();
      // await database.sync();
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
  }

  listen() {
    this.app.listen(this.port, () => {
      // eslint-disable-next-line no-console
      console.log('Server running from port', this.port);
    });
  }
}

export default Server;
