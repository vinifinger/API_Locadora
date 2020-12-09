import { Movie } from "../entities/Movie";
import { Movies } from "../entities/Movies";

export interface IMovieRepository {
    createMovie(movie: Movie): Promise<void>;

    readMovie(): Promise<Movies>;
    readMoviebyName(movie: Movie): Promise<Movies>;

    updateMovie(movie: Movie): Promise<void>;

    deleteMovie(movie: Movie): Promise<void>;
}