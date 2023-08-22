import { Router } from 'express';
import { check } from 'express-validator';
import login from '../controllers/auth.controller.js'; // Cambio aquí

const router = Router();

router.post(
  '/login',
  [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').notEmpty(),
  ],
  login
);

export default router;
