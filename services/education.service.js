import Education from '../models/Education.js';
import User from '../models/User.js';

export const createEducationService = async (
  id,
  formation,
  institution,
  location,
  startDate,
  endDate,
  description,
) => {
  const user = await User.findOne({
    where: {
      us_id: id,
    },
  });
  if (!user) {
    throw new Error(`There are no users with the id ${id}`);
  }

  const newEducation = await Education.create({
    ed_formation: formation,
    ed_institution: institution,
    ed_location: location,
    ed_startDate: startDate,
    ed_endDate: endDate,
    ed_description: description,
    ed_fk_user: id,
  });

  return newEducation;
};

export const getEducationByIdService = async (id) => {
  const user = await User.findByPk(id, {
    where: {
      us_active: true,
    },
  });

  if (!user) {
    throw new Error(`There are no active users with the id ${id}`);
  }

  const education = await Education.findAll({
    where: {
      ed_fk_user: id,
    },
  });

  if (!education) {
    throw new Error(`There are no education with the id ${id}`);
  }

  if (education.length <= 0) {
    throw new Error(`Experience table for user with id ${id} is empty`);
  }

  return education;
};

export const updateEducationService = async (
  id,
  formation,
  institution,
  location,
  startData,
  endData,
  description,
) => {
  const educationToUpdate = await Education.findOne({
    where: {
      ed_fk_user: id,
    },
  });

  if (!educationToUpdate) {
    throw new Error(`Error. No education found with the user id ${id}`);
  }

  if (formation) educationToUpdate.ed_formation = formation;
  if (institution) educationToUpdate.ed_institution = institution;
  if (location) educationToUpdate.ed_location = location;
  if (startData) educationToUpdate.ed_startData = startData;
  if (endData) educationToUpdate.ed_endData = endData;
  if (description) educationToUpdate.ed_description = description;

  await educationToUpdate.save();
  return educationToUpdate;
};

export const deleteEducationService = async (id) => {
  // search register user id for education
  const educationToDelete = await Education.findByPk(id);

  if (!educationToDelete) {
    throw new Error(`There are no certificates to delete with the id ${id}`);
  }

  // Delete register education
  await educationToDelete.destroy();

  return educationToDelete;
};
