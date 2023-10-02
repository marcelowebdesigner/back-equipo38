import { Router } from 'express';
import {
  createPerson,
  getPersonById,
  updatePerson,
} from '../controllers/person.controller.js';
import jwtValidator from '../middlewares/validateJwt.js';

const router = Router();

router.get('/:id', jwtValidator, getPersonById);
router.post('/new/:id', jwtValidator, createPerson);
router.put('/:id', jwtValidator, updatePerson);

export default router;
