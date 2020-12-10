import { Request, Response } from "express";
import { CreateMovieUseCase } from "./CreateMovieUseCase";

export class CreateMovieController {
    constructor(
        private createMovieUseCase: CreateMovieUseCase,
    ){}

    async handle(req: Request, res: Response): Promise<Response> {
       const { title, director }  = req.body;

        if ( !title || !director )
            return res.status(400).json({
                message: 'Invalid field.'
            });

       try {
            await this.createMovieUseCase.execute({
                title,
                director
           });

           return res.status(201).send();
       } catch (err) {
           return res.status(400).json({
               message: err.message || 'Unexpected error.'
           });
       }
    }
}