
const connection = require('../../database/connection');

module.exports = {

    async index(request, response) {

        const { page = 1 } = request.query;
        const totalPage = 5;

        const [count] = await connection('incidents')
        .count();

        const data = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(totalPage)
        .offset((page - 1) * totalPage)
        .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(data);
    },

    async create(request, response) {

        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });

        return response.json({
            id: id
        });
    },

    async delete(request, response) {

        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (!incident) {
            return response.status(404).json({ error: 'Register not found'});
        }

        if (incident.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operation not permitted'});
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    },
}