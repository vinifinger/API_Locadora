import { SqliteMovieRepository } from "../../repositories/implementations/SqliteMovieRepository";
import { CreateMovieController } from "./CreateMovieController";
import { CreateMovieUseCase } from "./CreateMovieUseCase";

const  sqliteMovieRepository = new SqliteMovieRepository();

const createMovieUseCase = new CreateMovieUseCase(
    sqliteMovieRepository
);

const createMovieController = new CreateMovieController(
    createMovieUseCase
);

export { createMovieUseCase, createMovieController }