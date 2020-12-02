import { Movie } from "../../entities/Movie";
import { IMovieRepository } from "../../repositories/IMovieRepository";
import { ICreateMovieRequestDTO } from "./CreateMovieDTO";

export class CreateMovieUseCase {
    constructor(
        private movieRepository: IMovieRepository 
    ){}
    
    async execute(data: ICreateMovieRequestDTO) {
        const movie = new Movie(data);
        console.log(movie);
        
        await this.movieRepository.createMovie(movie);
    }
}