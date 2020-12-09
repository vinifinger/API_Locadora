import { Movie } from "../../../entities/Movie";
import { IMovieRepository } from "../../../repositories/IMovieRepository";
import { IReadMovieRequestDTO } from "./ReadMovieDTO";

export class ReadMovieUseCase {
    constructor(
        private movieRepository: IMovieRepository
    ){}
    
    async execute(data: IReadMovieRequestDTO): Promise<Movie> {
        const movie = new Movie(data);
        console.log('----- READ BY NAME -----');
        console.log(movie);
        
        if (movie.title != 'undefined')
            return await this.movieRepository.readMoviebyName(movie);
        else 
            return await this.movieRepository.readMovie();
        
    }
}