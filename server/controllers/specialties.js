const { Specialties } = require("../models/specialties");

const getSpecialties = () => {
  return Specialties.find({});
};

const getSpecialtyById = id => {
  return Specialties.findById(id);
};

module.exports = {
  getSpecialties,
  getSpecialtyById
};
