import * as knex from 'knex';
import { uuid } from 'uuidv4';


export async function up(knex: knex) {
    await knex.schema.createTable('user', table => {
        table.string('id').primary();
        table.string('email').notNullable();
        table.string('name').notNullable();
        table.string('password').notNullable();
    });

    await knex('user').insert({
        id: uuid(),
        email: 'root@root.com',
        name: 'root',
        password: 'root'
    });

    return;
}

export async function down(knex: knex) {
    return knex.schema.dropTable('user');
}