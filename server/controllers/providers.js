const { ObjectID } = require('mongodb');
const Providers = require('../models/providers');
const Specialties = require('./specialties');

const saveProvider = async (req, res) => {
  const {
    firstName,
    lastName,
    middleName,
    email,
    projectedStartDate,
    employerId,
    providerType,
    staffStatus,
    assignedTo,
    status,
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
    specialty
  } = req.body;

  const specialtyObject = await Specialties.getSpecialtyById(specialty);
  const provider = new Providers({
    firstName,
    lastName,
    middleName,
    email,
    projectedStartDate,
    employerId,
    providerType,
    staffStatus,
    assignedTo,
    status,
    createdBy,
    createdAt: new Date(),
    updatedBy,
    updatedAt: new Date(),
    specialty: specialtyObject
  });

  try {
    await provider.save();
    res.status(200).send(provider);
  } catch (e) {
    res.status(400).send(e);
  }
};

const getProviders = () => {
  return Providers.find();
};

const getProviderById = id => {
  return Providers.findById(id);
};

const deleteProvider = id => {
  return Providers.findByIdAndRemove(id);
};

const updateProvider = async (req, res) => {
  try {
    //destructuring
    const { params: { id } } = req;
    const { body: { specialty: specialtyId } } = req;
    const { body: update } = req;

    if (
      !(
        ObjectID.isValid(id) &&
        (ObjectID.isValid(specialtyId) || specialtyId === undefined)
      )
    )
      return res.status(400).send({ message: 'Bad Request - Invalid ID' });

    const specialtyObject = await Specialties.getSpecialtyById(specialtyId);
    update.completedAt = new Date();
    if (!(specialtyObject === null)) update.specialty = specialtyObject;
    const provider = await Providers.findByIdAndUpdate(
      id,
      { $set: update },
      { new: true }
    );
    if (!provider) res.status(404).send();
    res.status(200).send({ provider });
  } catch (e) {
    res.status(400).send({ message: 'por catch' });
  }
};

module.exports = {
  getProviders,
  getProviderById,
  deleteProvider,
  saveProvider,
  updateProvider
};
