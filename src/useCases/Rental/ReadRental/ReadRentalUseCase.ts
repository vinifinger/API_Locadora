import { Rental } from "../../../entities/Rental";
import { Rents } from "../../../entities/Rents";
import { IRentalRepository } from "../../../repositories/IRentalRepository";
import { IReadRentalRequestDTO } from "./ReadRentalDTO";

export class ReadRentalUseCase {
    constructor(
        private rentalRepository: IRentalRepository 
    ){}
    
    async execute(data: IReadRentalRequestDTO): Promise<Rents> {
        const rental = new Rental(data, data.id);
        console.log('----- READ -----');
        console.log(rental);
        
        if (rental.id != 'undefined')
            return await this.rentalRepository.readRental(rental);    

        if (rental.idMovie != 'undefined')
            return await this.rentalRepository.readRentalbyMovie(rental);

        if (rental.email != 'undefined')
            return await this.rentalRepository.readRentalbyUser(rental);
        
    }
}