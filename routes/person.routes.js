import { Router } from 'express';
import {
  createPerson,
  getPersonById,
  updatePerson,
} from '../controllers/person.controller.js';

const router = Router();

router.get('/:id', getPersonById);
router.post('/new/:id', createPerson);
router.put('/:id', updatePerson);

export default router;
