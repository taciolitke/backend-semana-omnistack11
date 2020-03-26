const crypto = require('crypto');
const connection = require('../../database/connection');

module.exports = {

     async index(request, response) {

        var data = await connection('ongs').select();
    
        return response.json(data);
    },

    async create(request, response) {

        const { name, email, whatsapp, city, uf } = request.body;
    
        const id = crypto.randomBytes(4).toString('HEX');
    
        console.log('request ongs:', request.body);
        console.log('id:', id);
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
    
        return response.json({
            id: id,
            message: "ONG registred with success!"
        });
    }
};