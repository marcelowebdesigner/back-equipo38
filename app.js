import "dotenv/config";
import Server from "./models/Server.js"; 
import jwt from "jsonwebtoken"; 
import express from 'express';
import multer from 'multer';

const app = express();
const port= 3000;
app.use(express.static('views'));

// Configura Multer para manejar la subida de archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Especifica la carpeta donde se guardarán los archivos
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // Define el nombre del archivo cuando se guarda
    const fileName = Date.now() + '-' + file.originalname;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

// Ruta para subir un archivo
app.post('/subir-archivo', upload.single('archivo'), (req, res) => {
  // El archivo se ha subido correctamente
  res.send('Archivo subido con éxito');
});

app.listen(port, () => {
  console.log(`El servidor está funcionando en el puerto ${port} `);
});
const server = new Server();

server.listen();
