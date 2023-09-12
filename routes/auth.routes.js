import { Router } from 'express';
import { check } from 'express-validator';
import login from '../controllers/auth.controller.js';
import fieldsValidator from '../middlewares/fields-validator.js';

const router = Router();

router.post(
  '/login',
  [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').notEmpty(),
    fieldsValidator,
  ],
  login,
);

export default router;
