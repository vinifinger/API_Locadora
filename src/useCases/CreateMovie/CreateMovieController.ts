import { Request, Response } from "express";
import { CreateMovieUseCase } from "./CreateMovieUseCase";

export class CreateMovieController {
    constructor(
        private createMovieUseCase: CreateMovieUseCase,
    ){}

    async handle(req: Request, res: Response): Promise<Response> {
       const { name, image, description, category, producer, duration }  = req.body;

       try {
            await this.createMovieUseCase.execute({
                name,
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