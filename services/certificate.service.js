import Certificate from '../models/Certificate.js';
import User from '../models/User.js';

export const getCertificateByIdService = async (id) => {
  const user = await User.findByPk(id, {
    where: {
      us_active: true,
    },
  });

  if (!user) {
    throw new Error(`There are no active users with the id ${id}`);
  }

  const certificate = await Certificate.findAll({
    where: {
      ce_fk_user: id,
    },
  });

  if (!certificate) {
    throw new Error(`There are no certificate with the id ${id}`);
  }

  if (certificate.length <= 0) {
    throw new Error(`Experience table for user with id ${id} is empty`);
  }

  return certificate;
};

export const createCertificateService = async (
  id,
  training,
  institution,
  year,
) => {
  const user = await User.findOne({
    where: {
      us_id: id,
    },
  });
  if (!user) {
    throw new Error(`There are no users with the id ${id}`);
  }

  const newCertificate = await Certificate.create({
    ce_training: training,
    ce_institution: institution,
    ce_year: year,
    ce_fk_user: id,
  });

  return newCertificate;
};

export const updateCertificateService = async (
  id,
  training,
  institution,
  year,
) => {
  const certificateToUpdate = await Certificate.findOne({
    where: {
      ce_fk_user: id,
    },
  });

  if (!certificateToUpdate) {
    throw new Error(`Error. No certificate found with the user id ${id}`);
  }
  if (training) certificateToUpdate.ce_formation = training;
  if (institution) certificateToUpdate.ce_institution = institution;
  if (year) certificateToUpdate.ce_year = year;

  await certificateToUpdate.save();
  return certificateToUpdate;
};

export const deleteCertificateService = async (id) => {
  // serch register user id for certificate
  const certificateToDelete = await Certificate.findByPk(id);

  if (!certificateToDelete) {
    throw new Error(`There are no certificates to delete with the id ${id}`);
  }

  await certificateToDelete.destroy();

  return certificateToDelete;
};
