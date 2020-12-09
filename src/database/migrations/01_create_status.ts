import * as knex from 'knex';

export async function up(knex: knex) {
    await knex.schema.createTable('status', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
    });

    await knex('status').insert([
        {
            name: 'available'
        }, 
        {
            name: 'rented'
        }
    ]);

    return;
}

export async function down(knex: knex) {
    return knex.schema.dropTable('status');
}