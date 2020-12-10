import { Request, Response } from "express";
import { DeleteMovieUseCase } from "./DeleteMovieUseCase";

export class DeleteMovieController {
    constructor(
        private deleteMovieUseCase: DeleteMovieUseCase,
    ){}

    async handle(req: Request, res: Response): Promise<Response> {

       const id = String(req.query.id);

       if (!id)
        return res.status(400).json({
            message: 'Invalid field.'
        });

       try {
            await this.deleteMovieUseCase.execute({
                id
           });

           return res.status(200).send();
       } catch (err) {
           return res.status(400).json({
               message: err.message || 'Unexpected error.'
           });
       }
    }
}