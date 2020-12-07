import { SqliteMovieRepository } from "../../repositories/implementations/SqliteMovieRepository";
import { DeleteMovieController } from "./DeleteMovieController";
import { DeleteMovieUseCase } from "./DeleteMovieUseCase";

const  sqliteMovieRepository = new SqliteMovieRepository();

const deleteMovieUseCase = new DeleteMovieUseCase(
    sqliteMovieRepository
);

const deleteMovieController = new DeleteMovieController(
    deleteMovieUseCase
);

export { deleteMovieUseCase, deleteMovieController }