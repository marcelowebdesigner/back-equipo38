import { Router } from 'express';
import {
  createUser,
  deleteUser,
  getAllUsers,
} from '../controllers/user.controller.js';
import { check } from 'express-validator';
import fieldsValidator from '../middlewares/fields-validator.js';

const router = Router();

router.get('/', getAllUsers);
router.post(
  '/new',
  [
    check('userName', 'username is required').notEmpty(),
    check('email', 'Email is invalid').isEmail(),
    check('password', 'Password must have at least 8 characters').isLength({
      min: 8,
    }),
    fieldsValidator,
  ],
  createUser,
);
router.delete('/:id', deleteUser);

export default router;
