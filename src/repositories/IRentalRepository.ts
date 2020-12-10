import { Movie } from "../entities/Movie";
import { Rental } from "../entities/Rental";
import { Rents } from "../entities/Rents";

export interface IRentalRepository {
    createRental(rental: Rental): Promise<void>;

    readRental(): Promise<Rents>;
    readRentalbyId(rental: Rental): Promise<Rents>;
    readRentalbyMovie(rental: Rental): Promise<Rents>;
    readRentalbyUser(rental: Rental): Promise<Rents>;
    readMoviebyStatus(movie: Movie): Promise<Movie>;

    updateRental(rental: Rental): Promise<void>;
}