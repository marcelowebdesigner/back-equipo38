import { validationResult } from 'express-validator';

const fieldsValidator = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(500).json(errors);
  }

  next();
};

export default fieldsValidator;
