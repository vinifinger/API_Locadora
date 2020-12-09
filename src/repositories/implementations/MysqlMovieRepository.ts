import { db } from "../../database/connection";
import { Movie } from "../../entities/Movie";
import { Movies } from "../../entities/Movies";
import { IMovieRepository } from "../IMovieRepository";

export class MysqlMovieRepository implements IMovieRepository {
    async createMovie(movie: Movie): Promise<void> {
    
        const { 
            id,
            title,
            director,
            image,
            description,
            category,
            producer,
            duration
        } = movie;
    
        const trx = await db.transaction();

        try {
            await trx('movie').insert({
                id,
                title,
                director,
                image,
                description,
                category,
                producer,
                duration
            });

            trx.commit();
        } catch (err) {
            return err;   
        }
    };

    async readMovie(): Promise<Movies> {
        try {
            const data = await db('movie').select('*').where('idStatus', 1);
            const movies = new Movies(data);

            return movies;
        } catch (err) {
            return err;
        }
    };
    async readMoviebyName(movie: Movie): Promise<Movies> {

        const {
            title
        } = movie;

        try {
            const data = await db('movie').select('*').where('title', 'like', `%${title}%`);
            const movies = new Movies(data);

            return movies;
        } catch (err) {
            return err;
        }
    };

    async updateMovie(movie: Movie): Promise<void> {
        
        const { 
            id,
            title,
            director,
            image,
            description,
            category,
            producer,
            duration
        } = movie;

        const trx = await db.transaction();

        try {

            await trx('movie').update({
                title,
                director,
                image,
                description,
                category,
                producer,
                duration
            }).where('id', id);

            trx.commit();
        } catch (err) {
            return err;
        }
    };

    async deleteMovie(movie: Movie): Promise<void> {
        
        const {
            id
        } = movie;

        const trx = await db.transaction();

        try {
            
            await trx('movie').delete()
            .where('id', id);

            trx.commit();
        } catch (err) {
            return err;
        }
    }
}