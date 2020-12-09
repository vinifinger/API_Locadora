
import { MysqlUserRepository } from "../../../repositories/implementations/MysqlUserRepository";
import { ReadUserController } from "./ReadUserController";
import { ReadUserUseCase } from "./ReadUserUseCase";

const  mysqlUserRepository = new MysqlUserRepository();

const readUserUseCase = new ReadUserUseCase(
    mysqlUserRepository
);

const readUserController = new ReadUserController(
    readUserUseCase
);

export { readUserUseCase, readUserController }