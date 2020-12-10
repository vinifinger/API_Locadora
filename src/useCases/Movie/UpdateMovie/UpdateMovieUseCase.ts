import { Movie } from "../../../entities/Movie";
import { IMovieRepository } from "../../../repositories/IMovieRepository";
import { IUpdateMovieRequestDTO } from "./UpdateMovieDTO";

export class UpdateMovieUseCase {
    constructor(
        private movieRepository: IMovieRepository 
    ){}
    
    async execute(data: IUpdateMovieRequestDTO) {
        const movie = new Movie(data, data.id);
        
        await this.movieRepository.updateMovie(movie);
    }
}