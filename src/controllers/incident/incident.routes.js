const express = require('express');
const controller = require('./IncidentController');

const routes = express.Router();

const base = '/incidents';

routes.get(base, controller.index);
routes.post(base, controller.create);
routes.delete(`${base}/:id`, controller.delete);

module.exports = routes;