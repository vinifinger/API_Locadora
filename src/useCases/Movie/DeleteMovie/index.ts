
import { MysqlMovieRepository } from "../../../repositories/implementations/MysqlMovieRepository";
import { DeleteMovieController } from "./DeleteMovieController";
import { DeleteMovieUseCase } from "./DeleteMovieUseCase";

const  mysqlMovieRepository = new MysqlMovieRepository();

const deleteMovieUseCase = new DeleteMovieUseCase(
    mysqlMovieRepository
);

const deleteMovieController = new DeleteMovieController(
    deleteMovieUseCase
);

export { deleteMovieUseCase, deleteMovieController }