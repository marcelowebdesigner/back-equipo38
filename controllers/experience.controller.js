import {
  createExperienceService,
  deleteExperienceService,
  updateExperienceService,
} from '../services/experience.service.js';

export const createExperience = async (req, res, next) => {
  const { id } = req.params;
  const { position, startDate, finishDate, companyName, description } =
    req.body;

  try {
    const newExperience = await createExperienceService(
      id,
      position,
      startDate,
      finishDate,
      companyName,
      description,
    );

    res.status(201).json({ newExperience });
  } catch (error) {
    next(error);
  }
};

export const updateExperience = async (req, res, next) => {
  const { id } = req.params;
  // eslint-disable-next-line prefer-destructuring
  const body = req.body;

  try {
    const updatedExperience = await updateExperienceService(id, body);

    res.status(200).json({ updatedExperience });
  } catch (error) {
    next(error);
  }
};

export const deleteExperience = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedExperience = await deleteExperienceService(id);

    res.status(410).json({ deletedExperience });
  } catch (error) {
    next(error);
  }
};
