import { MysqlRentalRepository } from "../../../repositories/implementations/MysqlRentalRepository";
import { CreateRentalController } from "./CreateRentalController";
import { CreateRentalUseCase } from "./CreateRentalUseCase";

const  mysqlRentalRepository = new MysqlRentalRepository();

const createRentalUseCase = new CreateRentalUseCase(
    mysqlRentalRepository
);

const createRentalController = new CreateRentalController(
    createRentalUseCase
);

export { createRentalUseCase, createRentalController }