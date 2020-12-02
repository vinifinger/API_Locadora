import { Request, Response } from "express";
import { ReadMovieUseCase } from "./ReadMovieUseCase";

export class ReadMovieController {
    constructor(
        private readMovieUseCase: ReadMovieUseCase,
    ){}

    async handle(req: Request, res: Response): Promise<Response> {
       try {
            const result = await this.readMovieUseCase.execute();
            console.log(result);

           return res.status(200).json({result});
       } catch (err) {
           return res.status(400).json({
               message: err.message || 'Unexpected error.'
           });
       }
    }
}