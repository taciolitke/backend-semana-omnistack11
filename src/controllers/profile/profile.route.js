const express = require('express');
const profileController = require('./ProfileController');

const routes = express.Router();
const base = '/profiles';

routes.get(base, profileController.index);

module.exports = routes;