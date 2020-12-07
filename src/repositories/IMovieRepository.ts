import { Movie } from "../entities/Movie";

export interface IMovieRepository {
    createMovie(movie: Movie): Promise<void>;

    readMovie(): Promise<Movie>;

    updateMovie(movie: Movie): Promise<void>;

    deleteMovie(movie: Movie): Promise<void>;
}