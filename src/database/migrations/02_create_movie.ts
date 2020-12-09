import * as knex from 'knex';

export async function up(knex: knex) {
    return knex.schema.createTable('movie', table => {
        table.string('id').primary();
        table.string('title').notNullable();
        table.string('director').notNullable();
        table.string('image').notNullable();
        table.string('description').notNullable();
        table.integer('idStatus').notNullable();
        table.string('category').notNullable();
        table.string('producer').notNullable();
        table.string('duration').notNullable();
    });
}

export async function down(knex: knex) {
    return knex.schema.dropTable('movie');
}