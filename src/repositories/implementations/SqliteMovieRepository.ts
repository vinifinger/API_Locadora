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
            console.log(data);
            const movies = new Movies(data);

            return movies;
        } catch (error) {
            
        }
    };
}