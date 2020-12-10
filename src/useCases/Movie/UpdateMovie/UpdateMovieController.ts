import { Request, Response } from "express";
import { UpdateMovieUseCase } from "./UpdateMovieUseCase";

export class UpdateMovieController {
    constructor(
        private updateMovieUseCase: UpdateMovieUseCase,
    ){}

    async handle(req: Request, res: Response): Promise<Response> {
       const { title, director, idStatus }  = req.body;
       const id = String(req.query.id);

       try {
            await this.updateMovieUseCase.execute({
                id,
                title,
                director,
                idStatus
           });

           return res.status(200).send();
       } catch (err) {
           return res.status(400).json({
               message: err.message || 'Unexpected error.'
           });
       }
    }
}