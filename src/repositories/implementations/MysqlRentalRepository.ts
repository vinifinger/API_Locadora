import { db } from "../../database/connection";
import { Movie } from "../../entities/Movie";
import { Rental } from "../../entities/Rental";
import { Rents } from "../../entities/Rents";
import { IRentalRepository } from "../IRentalRepository";

export class MysqlRentalRepository implements IRentalRepository {
    async createRental(rental: Rental): Promise<void> {
    
        const { 
            id,
            emailUser,
            idMovie,
            dateStart,
            dateEnd
        } = rental;

        const idStatus = 2;
    
        const trx = await db.transaction();

        try {

            await trx('rental').insert({
                id,
                emailUser,
                idMovie,
                idStatus,
                dateStart,
                dateEnd
            });

            await trx('movie').update({
                idStatus
            }).where('id', idMovie);

            trx.commit();
        } catch (err) {
            throw new Error(err);
        }
    };

    async readRental (): Promise<Rents> {
        try {
            const content = await db('rental')
                .select(
                    'rental.id AS id', 
                    'rental.idMovie AS idMovie',
                    'movie.title AS titleMovie', 
                    'rental.emailUser AS emailUser', 
                    'user.name AS nameUser', 
                    'status.name AS status', 
                    'rental.dateStart AS dateStart', 
                    'rental.dateEnd AS dateEnd'
                )
                .join('movie', 'rental.idMovie', 'movie.id')
                .join('user', 'rental.emailUser', 'user.email')
                .join('status', 'rental.idStatus', 'status.id');
            
            const rents = new Rents(content);

            return rents;
        } catch (err) {
            throw new Error(err);
        }
    };

    async readRentalbyId (rental: Rental): Promise<Rents> {
        const {
            id
        } = rental;

        try {
            const content = await db('rental')
                .select(
                    'rental.id AS id', 
                    'rental.idMovie AS idMovie',
                    'movie.title AS titleMovie', 
                    'rental.emailUser AS emailUser', 
                    'user.name AS nameUser', 
                    'status.name AS status', 
                    'rental.dateStart AS dateStart', 
                    'rental.dateEnd AS dateEnd'
                )
                .join('movie', 'rental.idMovie', 'movie.id')
                .join('user', 'rental.emailUser', 'user.email')
                .join('status', 'rental.idStatus', 'status.id')
                .where('rental.id', id);
            
            
            const rents = new Rents(content);

            return rents;
        } catch (err) {
            throw new Error(err);
        }
    };

    async readRentalbyMovie (rental: Rental): Promise<Rents> {
        const {
            idMovie
        } = rental;

        try {
            const content = await db('rental')
                .select(
                    'rental.id AS id', 
                    'rental.idMovie AS idMovie',
                    'movie.title AS titleMovie', 
                    'rental.emailUser AS emailUser', 
                    'user.name AS nameUser', 
                    'status.name AS status', 
                    'rental.dateStart AS dateStart', 
                    'rental.dateEnd AS dateEnd'
                )
                .join('movie', 'rental.idMovie', 'movie.id')
                .join('user', 'rental.emailUser', 'user.email')
                .join('status', 'rental.idStatus', 'status.id')
                .where('rental.idMovie', idMovie);
            
            
            const rents = new Rents(content);

            return rents;
        } catch (err) {
            throw new Error(err);
        }
    };

    async readRentalbyUser (rental: Rental): Promise<Rents> {
        const {
            emailUser
        } = rental;

        try {
            const content = await db('rental')
                .select(
                    'rental.id AS id', 
                    'rental.idMovie AS idMovie',
                    'movie.title AS titleMovie', 
                    'rental.emailUser', 
                    'user.name AS nameUser', 
                    'status.name AS status', 
                    'rental.dateStart AS dateStart', 
                    'rental.dateEnd AS dateEnd'
                )
                .join('movie', 'rental.idMovie', 'movie.id')
                .join('user', 'rental.emailUser', 'user.email')
                .join('status', 'rental.idStatus', 'status.id')
                .where('rental.emailUser', emailUser);
            
            
            const rents = new Rents(content);

            return rents;
        } catch (err) {
            throw new Error(err);
        }
    }

    async readMoviebyStatus (idMovie: string) {

        try {
            const content = await db('movie').where('id', idMovie).andWhere('idStatus', 1);

            return content[0];
        } catch (err) {
            throw new Error(err);
        }
    }

    async updateRental(rental: Rental): Promise<void> {
        const { id } = rental;

        const trx = await db.transaction();

        try {
            await trx('rental').update({
                idStatus: 3
            }).where('id', id);

            const content = await trx('rental')
                .select('idMovie')
                .where('id', id);

            (id);

            await trx('movie').update({
                idStatus: 1
            }).where('id', content[0].idMovie);

            trx.commit();
        } catch (err) {
            throw new Error(err);
        }
    }
}