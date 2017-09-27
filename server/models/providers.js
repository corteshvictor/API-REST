const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { SpecialtySchema } = require("./specialties.js");

// Schema to define list of document properties providers
const ProvidersSchema = Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  middleName: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  specialty: SpecialtySchema,
  projectedStartDate: {
    type: Date
  },
  employerId: {
    type: Number
  },
  providerType: {
    type: String
  },
  staffStatus: {
    type: String
  },
  assignedTo: {
    type: Number
  },
  status: {
    type: String
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

module.exports = mongoose.model("Providers", ProvidersSchema);
