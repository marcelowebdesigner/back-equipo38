import Person from '../models/Person.js';

export const createPersonService = async (
  id,
  name,
  lastName,
  address,
  email,
  phone,
  image 
) => {
  const user = await Person.findOne({
    where: {
      pe_fk_user: id,
    },
  });

  if (user && user.pe_completed === true) {
    throw new Error('User information has already been completed.');
  }

  const newPerson = await Person.create({
    pe_name: name,
    pe_lastName: lastName,
    pe_address: address,
    pe_email: email,
    pe_phone: phone,
    pe_completed: true,
    pe_fk_user: id,
    pe_image: image, 
  });

  return newPerson;
};

export const updatePersonService = async (
  id,
  name,
  lastName,
  address,
  email,
  phone,
  image 
) => {
  const personToUpdate = await Person.findOne({
    where: {
      pe_fk_user: id,
    },
  });

  if (!personToUpdate) {
    throw new Error(`Error. No person found with the user id ${id}`);
  }

  personToUpdate.pe_name = name;
  personToUpdate.pe_lastName = lastName;
  personToUpdate.pe_address = address;
  personToUpdate.pe_email = email;
  personToUpdate.pe_phone = phone;
  personToUpdate.pe_image = image; 

  await personToUpdate.save();

  return personToUpdate;
};
