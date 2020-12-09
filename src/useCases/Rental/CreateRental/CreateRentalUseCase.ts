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
        
        return await this.rentalRepository.createRental(rental);
    }
}