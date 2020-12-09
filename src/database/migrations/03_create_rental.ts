import * as knex from 'knex';

export async function up(knex: knex) {
    return knex.schema.createTable('rental', table => {
        table.string('id').primary();
        table.string('idMovie').notNullable();
        table.string('emailUser').notNullable();
        table.integer('idStatus').notNullable();
        table.dateTime('dateStart').notNullable();
        table.dateTime('dateEnd').notNullable();
    });
}

export async function down(knex: knex) {
    return knex.schema.dropTable('rental');
}