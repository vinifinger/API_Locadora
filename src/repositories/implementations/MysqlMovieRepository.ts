import { db } from "../../database/connection";
import { Movie } from "../../entities/Movie";
import { Movies } from "../../entities/Movies";
import { IMovieRepository } from "../IMovieRepository";

export class MysqlMovieRepository implements IMovieRepository {
    async createMovie(movie: Movie): Promise<void> {
    
        const { 
            id,
            title,
            director
        } = movie;
    
        const trx = await db.transaction();

        try {
            await trx('movie').insert({
                id,
                title,
                director,
                idStatus: 1
            });

            trx.commit();
        } catch (err) {
            throw new Error(err);  
        }
    };

    async readMovie(): Promise<Movies> {
        try {
            const data = await db('movie')
            .select(
                'movie.id',
                'movie.title',
                'movie.director',
                'status.name AS status'
            )
            .join('status', 'status.id', 'movie.idStatus')
            .where('movie.idStatus', 1);
            const movies = new Movies(data);

            return movies;
        } catch (err) {
            throw new Error(err);
        }
    };
    async readMoviebyName(movie: Movie): Promise<Movies> {

        const {
            title
        } = movie;

        try {
            const data = await db('movie')
            .select(
                'movie.id',
                'movie.title',
                'movie.director',
                'status.name AS status'
            )
            .join('status', 'status.id', 'movie.idStatus')
            .where('title', 'like', `%${title}%`);
            const movies = new Movies(data);

            return movies;
        } catch (err) {
            throw new Error(err);
        }
    };

    async updateMovie(movie: Movie): Promise<void> {
        
        const { 
            id,
            title,
            director,
            idStatus
        } = movie;

        const trx = await db.transaction();

        try {

            await trx('movie').update({
                title,
                director,
                idStatus
            }).where('id', id);

            trx.commit();
        } catch (err) {
            throw new Error(err);
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
            throw new Error(err);
        }
    }
}