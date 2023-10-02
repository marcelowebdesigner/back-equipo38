import {
  createEducationService,
  updateEducationService,
  deleteEducationService,
  getEducationByIdService,
} from '../services/education.service.js';

export const getEducationById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const education = await getEducationByIdService(id);

    res.status(200).json({ education });
  } catch (error) {
    next(error);
  }
};

export const createEducation = async (req, res, next) => {
  const { id } = req.params;
  const { formation, institution, location, startDate, finishDate, description } =
    req.body;
  try {
    const newEducation = await createEducationService(
      id,
      formation,
      institution,
      location,
      startDate,
      finishDate,
      description,
    );

    res.status(201).json({ newEducation });
  } catch (error) {
    next(error);
  }
};

export const updateEducation = async (req, res, next) => {
  const { id } = req.params;
  const { formation, institution, location, startDate, finishDate, description } =
    req.body;

  try {
    const education = await updateEducationService(
      id,
      formation,
      institution,
      location,
      startDate,
      finishDate,
      description,
    );

    res.status(200).json({ education });
  } catch (error) {
    next(error);
  }
};

export const deleteEducation = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await deleteEducationService(id);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
