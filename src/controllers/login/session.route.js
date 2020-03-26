const express = require('express');
const sessionController = require('./SessionController');

const routes = express.Router();
const base = '/session';

routes.post(base, sessionController.create);

module.exports = routes;