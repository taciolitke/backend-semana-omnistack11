const express = require('express');
const userRoutes = require('./controllers/user/user.routes');
const ongsRoutes = require('./controllers/ong/ongs.routes');
const incidentRoutes = require('./controllers/incident/incident.routes');
const profileRoutes = require('./controllers/profile/profile.route');
const sessionRoutes = require('./controllers/login/session.route');

const routes = express.Router();

routes.use(userRoutes);
routes.use(ongsRoutes);
routes.use(incidentRoutes);
routes.use(profileRoutes);
routes.use(sessionRoutes);

module.exports = routes;