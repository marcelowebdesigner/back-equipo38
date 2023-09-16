import { Router } from 'express';
import {
  createPerson,
  updatePerson,
  uploadImage,
} from '../controllers/person.controller.js'; 

const router = Router();

router.post('/:id/upload-image', uploadImage);

router.post('/new/:id', createPerson);
router.put('/:id', updatePerson);

export default router;