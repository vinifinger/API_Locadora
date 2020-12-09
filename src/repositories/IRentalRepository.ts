import { Rental } from "../entities/Rental";
import { Rents } from "../entities/Rents";

export interface IRentalRepository {
    createRental(rental: Rental): Promise<void>;

    readRental(rental: Rental): Promise<Rents>;
    readRentalbyMovie(rental: Rental): Promise<Rents>;
    readRentalbyUser(rental: Rental): Promise<Rents>;

    updateRental(rental: Rental): Promise<void>;
}