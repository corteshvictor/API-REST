const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema to define list of document properties specialties
const SpecialtySchema = Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  createdBy: {
    type: Number
  },
  createdAt: {
    type: Date
  },
  updatedBy: {
    Type: Number
  },
  updatedAt: {
    type: Date
  }
});

module.exports = {
  Specialties: mongoose.model("Specialties", SpecialtySchema),
  SpecialtySchema
};
