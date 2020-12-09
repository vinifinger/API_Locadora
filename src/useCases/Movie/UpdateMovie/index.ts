import { MysqlMovieRepository } from "../../../repositories/implementations/MysqlMovieRepository";
import { UpdateMovieController } from "./UpdateMovieController";
import { UpdateMovieUseCase } from "./UpdateMovieUseCase";

const  mysqlMovieRepository = new MysqlMovieRepository();

const updateMovieUseCase = new UpdateMovieUseCase(
    mysqlMovieRepository
);

const updateMovieController = new UpdateMovieController(
    updateMovieUseCase
);

export { updateMovieUseCase, updateMovieController }