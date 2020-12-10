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
        
        const idMovie = data.idMovie
        const result = await this.rentalRepository.readMoviebyStatus(idMovie);

            if (result) {
                return await this.rentalRepository.createRental(rental);
            }

            throw new Error('Movie is rented.');
    }
}