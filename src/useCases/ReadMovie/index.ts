import { SqliteMovieRepository } from "../../repositories/implementations/SqliteMovieRepository";
import { ReadMovieController } from "./ReadMovieController";
import { ReadMovieUseCase } from "./ReadMovieUseCase";

const  sqliteMovieRepository = new SqliteMovieRepository();

const readMovieUseCase = new ReadMovieUseCase(
    sqliteMovieRepository
);

const readMovieController = new ReadMovieController(
    readMovieUseCase
);

export { readMovieUseCase, readMovieController }