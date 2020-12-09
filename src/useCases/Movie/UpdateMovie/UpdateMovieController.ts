import { Request, Response } from "express";
import { UpdateMovieUseCase } from "./UpdateMovieUseCase";

export class UpdateMovieController {
    constructor(
        private updateMovieUseCase: UpdateMovieUseCase,
    ){}

    async handle(req: Request, res: Response): Promise<Response> {
       const { title, director, image, description, category, producer, duration }  = req.body;
       const { id } = req.params;

       try {
            await this.updateMovieUseCase.execute({
                id,
                title,
                director,
                image,
                description,
                category,
                producer,
                duration,
           });

           return res.status(201).send();
       } catch (err) {
           return res.status(400).json({
               message: err.message || 'Unexpected error.'
           });
       }
    }
}