import { SqliteMovieRepository } from "../../repositories/implementations/SqliteMovieRepository";
import { UpdateMovieController } from "./UpdateMovieController";
import { UpdateMovieUseCase } from "./UpdateMovieUseCase";

const  sqliteMovieRepository = new SqliteMovieRepository();

const updateMovieUseCase = new UpdateMovieUseCase(
    sqliteMovieRepository
);

const updateMovieController = new UpdateMovieController(
    updateMovieUseCase
);

export { updateMovieUseCase, updateMovieController }