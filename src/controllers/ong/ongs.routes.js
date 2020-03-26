const express = require('express');
const ongController = require('./OngController');

const routes = express.Router(express.json());
const base = '/ongs';

routes.post(base, ongController.create);

routes.get(base, ongController.index);

module.exports = routes;