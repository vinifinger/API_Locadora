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
        ('----- READ -----');
        (rental);
        
        if (rental.id != 'undefined')
            return await this.rentalRepository.readRentalbyId(rental);    

        if (rental.idMovie != 'undefined')
            return await this.rentalRepository.readRentalbyMovie(rental);

        if (rental.emailUser != 'undefined')
            return await this.rentalRepository.readRentalbyUser(rental);
        
        return await this.rentalRepository.readRental();
    }
}