const connection = require('../../database/connection');

module.exports = {
    async index(request, response) {

        const ong_id = request.headers.authorization;

        if (!ong_id) {
            return response.status(400).json({ error: "ong_id is required" });
        }

        const data = await connection('incidents')
            .where('ong_id', ong_id)
            .select();

        return response.json(data);
    },
}