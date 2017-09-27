const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routers');
const app = express();

app.use(bodyParser.urlencoded({ extended: false })); //help the method or verb PUT works better
app.use(bodyParser.json());
app.use('/api', api);

module.exports = app;
