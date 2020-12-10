import * as knex from 'knex';


export async function up(knex: knex) {
    return knex.schema.createTable('blackList', table => {
        table.string('hash').primary();
    });
}

export async function down(knex: knex) {
    return knex.schema.dropTable('blackList');
}