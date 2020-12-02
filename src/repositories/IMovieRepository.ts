import { Movie } from "../entities/Movie";

export interface IMovieRepository {
    createMovie(movie: Movie): Promise<void>;

    readMovie(): Promise<Movie>;
}