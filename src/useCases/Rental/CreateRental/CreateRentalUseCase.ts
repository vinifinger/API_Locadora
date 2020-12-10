import { Movie } from "../../../entities/Movie";
import { Movies } from "../../../entities/Movies";
import { Rental } from "../../../entities/Rental";
import { IRentalRepository } from "../../../repositories/IRentalRepository";
import { ICreateRentalRequestDTO } from "./CreateRentalDTO";

export class CreateRentalUseCase {
    constructor(
        private rentalRepository: IRentalRepository 
    ){}
    
    async execute(data: ICreateRentalRequestDTO): Promise<void> {
        const rental = new Rental(data);
        console.log('----- CREATE -----');
        console.log(rental);
        
        const content = {
            id : data.idMovie
        };

        const movie = new Movie(data, content.id);

        const result = await this.rentalRepository.readMoviebyStatus(movie);

        console.log(result);
        
        return await this.rentalRepository.createRental(rental);
    }
}