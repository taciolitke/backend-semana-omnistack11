const express = require('express');

const routes = express.Router();
const base = '/users';

routes.post(base, (request, response) => {

    console.log(request.body);

    return response.json({
        message: "Usuário cadastro com sucesso!"
    });
});

routes.get(base, (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: "Tácio Litke"
    });
});

routes.get(`${base}/:id`, (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: "Tácio Litke"
    });
});

module.exports = routes;