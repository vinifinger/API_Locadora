import { Rental } from "../../../entities/Rental";
import { IRentalRepository } from "../../../repositories/IRentalRepository";
import { IUpdateRentalRequestDTO } from "./UpdateRentalDTO";

export class UpdateRentalUseCase {
    constructor(
        private rentalRepository: IRentalRepository 
    ){}
    
    async execute(data: IUpdateRentalRequestDTO) {
        const rental = new Rental(data, data.id);
        console.log('----- UPDATE -----');
        console.log(rental);
        
        return await this.rentalRepository.updateRental(rental);
    }
}