const express = require('express');
const { ObjectID } = require('mongodb');
const providerCtrl = require('../controllers/providers');
const specialtyCtrl = require('../controllers/specialties');

const api = express.Router();

//Router improvements - new route() method, which returns an instance of a Route, can be used.
api
  .route('/providers')
  .get(async (req, res) => {
    try {
      const providers = await providerCtrl.getProviders();
      if (!providers) return res.status(404).send({ message: 'No providers' });
      res.status(200).send({ providers });
    } catch (e) {
      res.status(400).send(e);
    }
  })
  .post(providerCtrl.saveProvider);
api
  .route('/providers/:id')
  .get(async (req, res) => {
    try {
      const { params: { id } } = req; //destructuring
      if (!ObjectID.isValid(id))
        return res.status(400).send({ message: 'Bad Request - Invalid ID' });

      const provider = await providerCtrl.getProviderById(id); //from the controller, it is used: Providers.findById(id);
      if (!provider) return res.status(404).send({ message: 'Not Found' });
      res.status(200).send({ provider });
    } catch (e) {
      res.status(400).send(e);
    }
  })
  .put(providerCtrl.updateProvider)
  .delete(async (req, res) => {
    try {
      const { params: { id } } = req; //destructuring
      if (!ObjectID.isValid(id))
        return res.status(404).send({ message: 'Bad Request - Invalid ID' });

      const provider = await providerCtrl.deleteProvider(id); //from the controller, it is used: Providers.findByIdAndRemove(id);
      if (!provider) return res.status(404).send({ message: 'Not Found' });
      res.status(200).send({ provider });
    } catch (e) {
      res.status(400).send(e);
    }
  });

// specialty routes, to obtain all or a single specialty.
api.get('/specialties/', async (req, res) => {
  try {
    const specialties = await specialtyCtrl.getSpecialties();
    if (!specialties)
      return res.status(404).send({ message: 'No specialties' });
    res.status(200).send({ specialties });
  } catch (e) {
    res.status(400).send(e);
  }
});

api.get('/specialties/:id', async (req, res) => {
  try {
    const { params: { id } } = req; //destructuring
    if (!ObjectID.isValid(id))
      return res.status(400).send({ message: 'Bad Request - Invalid ID' });
    const specialty = await specialtyCtrl.getSpecialtyById(id); //from the controller, it is used: Specialties.findById(id);
    if (!specialty) return res.status(404).send({ message: 'Not Found' });
    res.status(200).send({ specialty });
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = api;
