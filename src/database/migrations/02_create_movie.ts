import * as knex from 'knex';
import { uuid } from 'uuidv4';

export async function up(knex: knex) {
    await knex.schema.createTable('movie', table => {
        table.string('id').primary();
        table.string('title').notNullable();
        table.string('director').notNullable();
        table.integer('idStatus').notNullable();
    });

    await knex('movie').insert([
        {
            'id': uuid(),
            'title': 'Vingadores: Ultimato',
            'director': 'Joe Russo',
            'idStatus': 1
        },
        {
            'id': uuid(),
            'title': 'John Wick',
            'director': 'Chad Stahelski',
            'idStatus': 1
        },
        {
            'id': uuid(),
            'title': 'Click',
            'director': 'Frank Coraci',
            'idStatus': 1
        },
        {
            'id': uuid(),
            'title': 'Velozes e furiosos',
            'director': 'Vin Diesel',
            'idStatus': 1
        },
        {
            'id': uuid(),
            'title': 'O Hobbit: Uma Jornada Inesperada',
            'director': 'Peter Jackson',
            'idStatus': 1
        }
    ]);

    return;
}

export async function down(knex: knex) {
    return knex.schema.dropTable('movie');
}