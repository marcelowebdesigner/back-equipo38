import { createPersonService, updatePersonService } from '../services/person.service.js';
import Person from '../models/Person.js'; // Importa el modelo Person
import multer from 'multer';
import path from 'path';

// Configurar multer para guardar las imágenes en una carpeta llamada "uploads"
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

export async function uploadImage(req, res, next) {
  try {
    const { id } = req.params;
    const imagePath = req.file.path;

    await Person.update({ pe_image: imagePath }, { where: { pe_id: id } });

    res.send('Imagen subida y vinculada a la persona con éxito.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al subir la imagen.');
  }
}

export const createPerson = async (req, res, next) => {
  const { id } = req.params;

  try {
    const { name, lastName, address, email, phone } = req.body;

    const person = await createPersonService(
      id,
      name,
      lastName,
      address,
      email,
      phone,
    );

    res.status(201).json({ person });
  } catch (error) {
    next(error);
  }
};

export const updatePerson = async (req, res, next) => {
  const { id } = req.params;
  const { name, lastName, address, email, phone } = req.body;

  try {
    const person = await updatePersonService(
      id,
      name,
      lastName,
      address,
      email,
      phone,
    );

    res.status(200).json({ person });
  } catch (error) {
    next(error);
  }
};
