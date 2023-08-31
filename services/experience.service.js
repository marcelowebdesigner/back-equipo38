import Experience from '../models/Experience.js';

export const createExperienceService = async (
  id,
  position,
  startDate,
  finishDate,
  companyName,
  description,
) => {
  const user = await Experience.findOne({
    where: {
      ex_fk_user: id,
    },
  });

  if (!user) {
    throw new Error(`There are no users with the id ${id}`);
  }

  const newExperience = await Experience.create({
    ex_position: position,
    ex_startDate: startDate,
    ex_finishDate: finishDate,
    ex_companyName: companyName,
    ex_description: description,
    ex_fk_user: id,
  });

  return newExperience;
};

export const updateExperienceService = async (id, body) => {
  const { position, startDate, finishDate, companyName, description } = body;

  // Check if experience exists
  const experienceToUpdate = await Experience.findByPk(id);

  if (!experienceToUpdate) {
    throw new Error(`There are no experiences with the id ${id}`);
  }

  // Update single fields
  if (position) {
    experienceToUpdate.ex_position = position;
  }
  if (startDate) {
    experienceToUpdate.ex_startDate = startDate;
  }
  if (finishDate) {
    experienceToUpdate.ex_finishDate = finishDate;
  }
  if (companyName) {
    experienceToUpdate.ex_companyName = companyName;
  }
  if (description) {
    experienceToUpdate.ex_description = description;
  }

  await experienceToUpdate.save();

  return experienceToUpdate;
};

export const deleteExperienceService = async (id) => {
  const experienceToDelete = await Experience.findByPk(id);

  await experienceToDelete.destroy();

  return experienceToDelete;
};
