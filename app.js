import "dotenv/config";
import Server from "./models/Server.js";
import jwt from "jsonwebtoken"; // Importa el módulo directamente

const server = new Server();

server.listen();
