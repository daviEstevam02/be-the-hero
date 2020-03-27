const connection = require('../database/connection')
const crypto = require('crypto');

module.exports = {//exportar métodos
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
        const{name, email, whatsapp, city, uf} = request.body

        const id = crypto.randomBytes(4).toString('HEX');//criando um id com 4 bytes de caracteres hexadecimais

        await connection('ongs').insert({ //await pra esperar este código finalizar para então continuar
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        return response.json({ id });//passando o Id para a ong para ela pode se conectar 


    }
};