import { MysqlRentalRepository } from "../../../repositories/implementations/MysqlRentalRepository";
import { ReadRentalController } from "./ReadRentalController";
import { ReadRentalUseCase } from "./ReadRentalUseCase";

const  mysqlRentalRepository = new MysqlRentalRepository();

const readRentalUseCase = new ReadRentalUseCase(
    mysqlRentalRepository
);

const readRentalController = new ReadRentalController(
    readRentalUseCase
);

export { readRentalUseCase, readRentalController }