import {
  createPersonService,
  getPersonByIdService,
  updatePersonService,
} from '../services/person.service.js';

export const getPersonById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const person = await getPersonByIdService(id);

    res.status(200).json({
      person,
    });
  } catch (error) {
    next(error);
  }
};

export const createPerson = async (req, res, next) => {
  const { id } = req.params;

  try {
    const { name, lastName, address, email, phone } = req.body;

    const person = await createPersonService(
      id,
      name,
      lastName,
      address,
      email,
      phone,
    );

    res.status(201).json({ person });
  } catch (error) {
    next(error);
  }
};

export const updatePerson = async (req, res, next) => {
  const { id } = req.params;
  const { name, lastName, address, email, phone } = req.body;

  try {
    const person = await updatePersonService(
      id,
      name,
      lastName,
      address,
      email,
      phone,
    );

    res.status(200).json({ person });
  } catch (error) {
    next(error);
  }
};
