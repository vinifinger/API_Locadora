
import { MysqlUserRepository } from "../../../repositories/implementations/MysqlUserRepository";
import { LoginUserController } from "./LoginUserController";
import { LoginUserUseCase } from "./LoginUserUseCase";

const  mysqlUserRepository = new MysqlUserRepository();

const loginUserUseCase = new LoginUserUseCase(
    mysqlUserRepository
);

const loginUserController = new LoginUserController(
    loginUserUseCase
);

export { loginUserUseCase, loginUserController }