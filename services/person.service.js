import Person from '../models/Person.js';

export const getPersonByIdService = async (id) => {
  const person = await Person.findByPk(id);

  if (!person) {
    throw new Error(`There is no person table with the id ${id}`);
  }

  return person;
};

export const createPersonService = async (
  id,
  name,
  lastName,
  address,
  email,
  phone,
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

  await personToUpdate.save();

  return personToUpdate;
};
