import express from 'express';
import cors from 'cors';

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 4000;

    // Middelwares
    this.middelwares();
  }

  middelwares() {
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
