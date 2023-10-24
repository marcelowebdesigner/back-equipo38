import { Router } from 'express';
import { check } from 'express-validator';
import {
  createEducation,
  deleteEducation,
  getEducationById,
  updateEducation,
} from '../controllers/education.controller.js';
import fieldsValidator from '../middlewares/fields-validator.js';
import jwtValidator from '../middlewares/validateJwt.js';

const router = Router();

// Custom function to validate date format "DD-MM-YYYY"
const isValidDate = (date) => /^\d{4}-\d{2}-\d{2}$/.test(date);

router.get('/:id', jwtValidator, getEducationById);
router.post(
  '/new/:id',
  jwtValidator,
  [
    check('formation', 'formation is required').notEmpty(),
    check('institution', 'institution is required').notEmpty(),
    check('location', 'location is required').notEmpty(),
    check('startDate', 'start date is invalid ').custom((value) => {
      if (!isValidDate(value)) {
        throw new Error('Invalid date format. Use YYYY-MM-DD.');
      }
      return true;
    }),
    check('finishDate', 'finish date is invalid ').custom((value) => {
      if (!isValidDate(value)) {
        throw new Error('Invalid date format. Use YYYY-MM-DD.');
      }
      return true;
    }),
    check('description', 'description is required').notEmpty(),

    fieldsValidator,
  ],
  createEducation,
);
router.put('/:id', jwtValidator, updateEducation);
router.delete('/:id', jwtValidator, deleteEducation);

export default router;
