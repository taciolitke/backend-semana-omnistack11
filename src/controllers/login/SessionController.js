const connection = require('../../database/connection');

module.exports = {
    async create(request, response) {
        const ong_id = request.headers.authorization;

        if (!ong_id) {
            return response.status(400).json({ error: "ong_id is required" });
        }

        const data = await connection('ongs')
            .where('id', ong_id)
            .select('name')
            .first();

        if (!data) {
            return response.status(400).json({ error: "no ONG found with this ID" });
        }

        return response.json(data);
    },
}