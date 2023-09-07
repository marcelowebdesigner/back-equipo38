import {
  createCertificateService,
  deleteCertificateService,
  updateCertificateService,
} from '../services/certificate.service.js';

export const createCertificate = async (req, res, next) => {
  const { id } = req.params;
  const { training, institution, year } =
    req.body;

  try {
    const newCertificate = await createCertificateService(
      id,
      training,
      institution,
      year,
    );

    res.status(201).json({ newCertificate });
  } catch (error) {
    next(error);
  }
};

export const updateCertificate = async (req, res, next) => {
  const { id } = req.params;
  // eslint-disable-next-line prefer-destructuring
  const body = req.body;

  try {
    const updatedCertificate = await updateCertificateService(id, body);

    res.status(200).json({ updatedCertificate});
  } catch (error) {
    next(error);
  }
};

export const deleteCertificate = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedCertificate = await deleteCertificateService(id);
    res.status(410).json({ deletedCertificate });
  } catch (error) {
    next(error);
  }
};
