import { Movie } from "../../entities/Movie";
import { IMovieRepository } from "../../repositories/IMovieRepository";
import { IReadMovieRequestDTO } from "./ReadMovieDTO";

export class ReadMovieUseCase {
    constructor(
        private movieRepository: IMovieRepository 
    ){}
    
    async execute(): Promise<Movie> {
        return await this.movieRepository.readMovie();
    }
}