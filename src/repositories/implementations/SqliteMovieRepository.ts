import db from "../../database/connection";
import { Movie } from "../../entities/Movie";
import { Movies } from "../../entities/Movies";
import { IMovieRepository } from "../IMovieRepository";

export class SqliteMovieRepository implements IMovieRepository {
    async createMovie(movie: Movie): Promise<void> {
    
        const { 
            id,
            name,
            image,
            description,
            category,
            producer,
            duration
        } = movie;
    
        const trx = await db.transaction();

        try {
            await trx('catalogo').insert({
                id,
                name,
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

    async readMovie() {
        try {
            const data = await db('catalogo').select('*');
            const movies = new Movies(data);

            return movies;
        } catch (err) {
            return err;
        }
    };

    async updateMovie(movie: Movie) {
        
        const { 
            id,
            name,
            image,
            description,
            category,
            producer,
            duration
        } = movie;

        const trx = await db.transaction();

        try {

            await trx('catalogo').update({
                name,
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

    async deleteMovie(movie: Movie) {
        
        const {
            id
        } = movie;

        const trx = await db.transaction();

        try {
            
            await trx('catalogo').delete()
            .where('id', id);

            trx.commit();
        } catch (err) {
            return err;
        }
    }
}