import {
    createEducationService,
    updateEducationService,
    deleteEducationService,

  } from '../services/education.service.js';
  
  export const createEducation = async (req, res, next) => {
    const { id } = req.params;
  
    try {
      const { formation, institution,location, startDate, endDate, description } = req.body;
  
      const education = await createEducationService(
        id,
        formation,
        institution,
        location,
        startDate,
        endDate,
        description,
      );
  
      res.status(201).json({ education });
    } catch (error) {
      next(error);
    }
  };
  
  export const updateEducation = async (req, res, next) => {
    const { id } = req.params;
    const { formation, institution, location, startDate, endDate, description } = req.body;
  
    try {
      const education = await updateEducationService(
        id,
        formation,
        institution,
        location,
        startDate,
        endDate,
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

  