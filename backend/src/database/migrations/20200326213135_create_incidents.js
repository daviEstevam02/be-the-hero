
exports.up = function (knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments();//cria uma chave primaria auto increment 1,2,3,4

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();//qual a ong que criou o incidente(relacionamento) - string pq o ID é string

        table.foreign('ong_id').references('id').inTable('ongs');//chave estrangeira
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('incidents');
};
