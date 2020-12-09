import { MysqlUserRepository } from "../../../repositories/implementations/MysqlUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const  mysqlUserRepository = new MysqlUserRepository();

const createUserUseCase = new CreateUserUseCase(
    mysqlUserRepository
);

const createUserController = new CreateUserController(
    createUserUseCase
);

export { createUserUseCase, createUserController }