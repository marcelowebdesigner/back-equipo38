import { Router } from 'express';
import { check } from 'express-validator';
import {
  createCertificate,
  deleteCertificate,
  getCertificateById,
  updateCertificate,
} from '../controllers/certificate.controller.js';
import fieldsValidator from '../middlewares/fields-validator.js';
import jwtValidator from '../middlewares/validateJwt.js';

const router = Router();

// Custom function to validate date format "DD-MM-YYYY"
const isValidDate = (date) => /^\d{4}$/.test(date);

router.get('/:id', jwtValidator, getCertificateById);
router.post(
  '/new/:id',
  jwtValidator,
  [
    check('training', 'training is required').notEmpty(),
    check('institution', 'institution is required').notEmpty(),
    check('year', 'year date is invalid ').custom((value) => {
      if (!isValidDate(value)) {
        throw new Error('Invalid date format. YYYY.');
      }
      return true;
    }),

    fieldsValidator,
  ],
  createCertificate,
);
router.put('/:id', jwtValidator, updateCertificate);
router.delete('/:id', jwtValidator, deleteCertificate);

export default router;
