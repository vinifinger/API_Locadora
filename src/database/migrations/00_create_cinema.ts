import * as knex from 'knex';

export async function up(knex: knex) {
    return knex.schema.createTable('catalogo', table => {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('image').notNullable();
        table.string('description').notNullable();
        table.string('category').notNullable();
        table.string('producer').notNullable();
        table.string('duration').notNullable();
    });
}

export async function down(knex: knex) {
    return knex.schema.dropTable('catalogo');
}