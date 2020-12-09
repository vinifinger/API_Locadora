import { db } from "../../database/connection";
import { Rental } from "../../entities/Rental";
import { Rents } from "../../entities/Rents";
import { IRentalRepository } from "../IRentalRepository";

export class MysqlRentalRepository implements IRentalRepository {
    async createRental(rental: Rental): Promise<void> {
    
        const { 
            id,
            email,
            idMovie,
            idStatus,
            dateStart,
            dateEnd
        } = rental;
    
        const trx = await db.transaction();

        try {
            await trx('rental').insert({
                id,
                email,
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
            return err;   
        }
    };

    async readRental (rental: Rental): Promise<Rents> {
        const {
            id
        } = rental;

        try {
            const content = await db('rental')
                .select(
                    'rental.id AS id', 
                    'rental.idMovie AS idMovie',
                    'movie.title AS titleMovie', 
                    'rental.email AS emailUser', 
                    'user.name AS nameUser', 
                    'status.name AS status', 
                    'rental.dateStart AS dateStart', 
                    'rental.dateEnd AS dateEnd'
                )
                .join('movie', 'rental.idMovie', 'movie.id')
                .join('user', 'rental.idUser', 'user.id')
                .join('status', 'rental.idStatus', 'status.id')
                .where('rental.id', id);
            
            
            const rents = new Rents(content);

            return rents;
        } catch (err) {
            return err;
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
                    'rental.idUser AS idUser', 
                    'user.name AS nameUser', 
                    'status.name AS status', 
                    'rental.dateStart AS dateStart', 
                    'rental.dateEnd AS dateEnd'
                )
                .join('movie', 'rental.idMovie', 'movie.id')
                .join('user', 'rental.idUser', 'user.id')
                .join('status', 'rental.idStatus', 'status.id')
                .where('rental.idMovie', idMovie);
            
            
            const rents = new Rents(content);

            return rents;
        } catch (err) {
            return err;
        }
    };

    async readRentalbyUser (rental: Rental): Promise<Rents> {
        const {
            email
        } = rental;

        try {
            const content = await db('rental')
                .select(
                    'rental.id AS id', 
                    'rental.idMovie AS idMovie',
                    'movie.title AS titleMovie', 
                    'rental.idUser AS idUser', 
                    'user.name AS nameUser', 
                    'status.name AS status', 
                    'rental.dateStart AS dateStart', 
                    'rental.dateEnd AS dateEnd'
                )
                .join('movie', 'rental.idMovie', 'movie.id')
                .join('user', 'rental.idUser', 'user.id')
                .join('status', 'rental.idStatus', 'status.id')
                .where('rental.email', email);
            
            
            const rents = new Rents(content);

            return rents;
        } catch (err) {
            return err;
        }
    }

    async updateRental(rental: Rental): Promise<void> {
        const { 
            id,
            idStatus
        } = rental;
    
        const trx = await db.transaction();

        try {
            await trx('rental').update({
                idStatus
            }).where('id', id);

            const content = await trx('rental')
                .select('idMovie')
                .where('id', id);

            console.log(content[0].idMovie);

            await trx('movie').update({
                idStatus: 1
            }).where('id', content[0].idMovie);

            trx.commit();
        } catch (err) {
            return err;   
        }
    }
}