import Education from '../models/Education.js';

export const createEducationService = async (
  id,
  formation,
  institution,
  location,
  startData,
  endData,
  description,
) => {
  const user = await Education.findOne({
    where: {
      ed_fk_user: id,
    },
  });
  if (!user) {
    throw new Error(`There are no users with the id ${id}`);
  }

// 
//  if (user && user.ed_completed === true) {
//    throw new Error('User information has already been completed.');
//  }

  const newEducation = await Education.create({
    ed_formation: formation,
    ed_institution: institution,
    ed_location: location,
    ed_startData: startData,
    ed_endData: endData,
    ed_description : description,
    ed_completed: true,
    ed_fk_user: id,
  });

  return newEducation;
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
    throw new Error(`Error. No person found with the user id ${id}`);
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

    // serch register user id for education
    const educationToDelete = await Education.findOne({
      where: {
        ed_fk_user: id,
      },
    });

    if (!educationToDelete) {
      throw new Error(`No user education record found with ID ${id}`);
    }

    // Delete register education
    await educationToDelete.destroy();

    return { message: 'Education record successfully removed' };
};