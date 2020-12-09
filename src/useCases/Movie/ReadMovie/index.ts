
import { MysqlMovieRepository } from "../../../repositories/implementations/MysqlMovieRepository";
import { ReadMovieController } from "./ReadMovieController";
import { ReadMovieUseCase } from "./ReadMovieUseCase";

const  mysqlMovieRepository = new MysqlMovieRepository();

const readMovieUseCase = new ReadMovieUseCase(
    mysqlMovieRepository
);

const readMovieController = new ReadMovieController(
    readMovieUseCase
);

export { readMovieUseCase, readMovieController }