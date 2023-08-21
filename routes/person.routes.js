import { Router } from 'express';
import {
  createPerson,
  updatePerson,
} from '../controllers/person.controller.js';

const router = Router();

router.post('/new/:id', createPerson);
router.put('/:id', updatePerson);

export default router;
