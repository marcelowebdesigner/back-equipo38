import { Router } from 'express';
import { check } from 'express-validator';
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
} from '../controllers/user.controller.js';
import fieldsValidator from '../middlewares/fields-validator.js';
import jwtValidator from '../middlewares/validateJwt.js';

const router = Router();

router.get('/:id', jwtValidator, getUserById);
router.get('/', jwtValidator, getAllUsers);
router.post(
  '/new',
  [
    jwtValidator,
    check('userName', 'username is required').notEmpty(),
    check('email', 'Email is invalid').isEmail(),
    check('password', 'Password must have at least 8 characters').isLength({
      min: 8,
    }),
    fieldsValidator,
  ],
  createUser,
);
router.delete('/:id', jwtValidator, deleteUser);

export default router;
