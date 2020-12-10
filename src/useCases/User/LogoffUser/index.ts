import { MysqlUserRepository } from "../../../repositories/implementations/MysqlUserRepository";
import { LogoffUserController } from "./LogoffUserController";
import { LogoffUserUseCase } from "./LogoffUserUseCase";

const  mysqlUserRepository = new MysqlUserRepository();

const logoffUserUseCase = new LogoffUserUseCase(
    mysqlUserRepository
);

const logoffUserController = new LogoffUserController(
    logoffUserUseCase
);

export { logoffUserUseCase, logoffUserController }