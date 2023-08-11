import { Router } from 'express';
import {
  createUser,
  deleteUser,
  getAllUsers,
} from '../controllers/user.controller.js';

const router = Router();

router.get('/', getAllUsers);
router.post('/new', createUser);
router.delete('/:id', deleteUser);

export default router;
