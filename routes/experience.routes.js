import { Router } from 'express';
import { check } from 'express-validator';
import {
  createExperience,
  deleteExperience,
  getExperienceById,
  updateExperience,
} from '../controllers/experience.controller.js';
import fieldsValidator from '../middlewares/fields-validator.js';
import jwtValidator from '../middlewares/validateJwt.js';

const router = Router();

// Function to validate date format "YYYY-MM-DD"
const isValidDate = (date) => /^\d{4}-\d{2}-\d{2}$/.test(date);

router.get('/:id', jwtValidator, getExperienceById);

// Data must be send YYYY-MM-DD
router.post(
  '/new/:id',
  jwtValidator,
  [
    check('position', 'Position is required').notEmpty(),
    check('startDate', 'Start date is required').custom((value) => {
      if (!isValidDate(value)) {
        throw new Error('Invalid date format. Use YYYY-MM-DD.');
      }
      return true;
    }),
    check('finishDate').custom((value) => {
      if (!isValidDate(value)) {
        throw new Error('Invalid date format. Use YYYY-MM-DD.');
      }
      return true;
    }),
    check('companyName', 'Company name is required').notEmpty(),
    check('description', 'Description is required'),
    fieldsValidator,
  ],
  createExperience,
);

router.put('/:id', jwtValidator, updateExperience);
router.delete('/:id', jwtValidator, deleteExperience);

export default router;
