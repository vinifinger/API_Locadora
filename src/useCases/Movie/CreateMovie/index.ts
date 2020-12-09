import { MysqlMovieRepository } from "../../../repositories/implementations/MysqlMovieRepository";
import { CreateMovieController } from "./CreateMovieController";
import { CreateMovieUseCase } from "./CreateMovieUseCase";

const  mysqlMovieRepository = new MysqlMovieRepository();

const createMovieUseCase = new CreateMovieUseCase(
    mysqlMovieRepository
);

const createMovieController = new CreateMovieController(
    createMovieUseCase
);

export { createMovieUseCase, createMovieController }