import { MysqlRentalRepository } from "../../../repositories/implementations/MysqlRentalRepository";
import { UpdateRentalController } from "./UpdateRentalController";
import { UpdateRentalUseCase } from "./UpdateRentalUseCase";

const  mysqlRentalRepository = new MysqlRentalRepository();

const updateRentalUseCase = new UpdateRentalUseCase(
    mysqlRentalRepository
);

const updateRentalController = new UpdateRentalController(
    updateRentalUseCase
);

export { updateRentalUseCase, updateRentalController }