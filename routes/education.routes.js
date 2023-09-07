import { Router } from 'express';
import { check } from 'express-validator';
import {
  createEducation,
  deleteEducation,
  updateEducation,
} from '../controllers/education.controller.js';
import fieldsValidator from '../middlewares/fields-validator.js';

const router = Router();

// Custom function to validate date format "DD-MM-YYYY"
const isValidDate = (date) => /^\d{2}-\d{2}-\d{4}$/.test(date);

router.post(
  '/new/:id',
  [
    check('formation', 'formation is required').notEmpty(),
    check('institution', 'institution is required').notEmpty(),
    check('location', 'location is required').notEmpty(),
    check('startDate', 'start date is invalid ').custom((value) => {
      if (!isValidDate(value)) {
        throw new Error('Invalid date format. Use DD-MM-YYYY.');
      }
      return true;
    }),
    check('endDate', 'end date is invalid ').custom((value) => {
      if (!isValidDate(value)) {
        throw new Error('Invalid date format. Use DD-MM-YYYY.');
      }
      return true;
    }),
    check('description', 'description is required').notEmpty(),
    
    fieldsValidator,
  ],
  createEducation,
);
router.put('/:id', updateEducation);
router.delete('/:id', deleteEducation);

export default router;