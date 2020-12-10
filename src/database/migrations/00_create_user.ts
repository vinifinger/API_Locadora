import * as knex from 'knex';

export async function up(knex: knex) {
    await knex.schema.createTable('user', table => {
        table.string('email').primary().notNullable();
        table.string('name').notNullable();
        table.string('password').notNullable();
    });

    await knex('user').insert({
        email: 'root@root.com',
        name: 'root',
        password: 'root'
    });

    return;
}

export async function down(knex: knex) {
    return knex.schema.dropTable('user');
}