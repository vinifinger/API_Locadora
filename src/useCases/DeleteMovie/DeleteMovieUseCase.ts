import { Movie } from "../../entities/Movie";
import { IMovieRepository } from "../../repositories/IMovieRepository";
import { IDeleteMovieRequestDTO } from "./DeleteMovieDTO";

export class DeleteMovieUseCase {
    constructor(
        private movieRepository: IMovieRepository 
    ){}
    
    async execute(data: IDeleteMovieRequestDTO) {
        const movie = new Movie(data, data.id);
        console.log('----- DELETE -----');
        console.log(movie);
        
        await this.movieRepository.deleteMovie(movie);
    }
}