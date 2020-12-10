import { Request, Response } from "express";
import { ReadRentalUseCase } from "./ReadRentalUseCase";

export class ReadRentalController {
    constructor(
        private readRentalUseCase: ReadRentalUseCase,
    ){}

    async handle(req: Request, res: Response): Promise<Response> {
        const id = String(req.query.id);
        const idMovie = String(req.query.idMovie); 
        const emailUser = String(req.query.emailUser);

        try {
            const result = await this.readRentalUseCase.execute({
                id, 
                idMovie,
                emailUser
            });

           return res.status(200).json({result});
        } catch (err) {
           return res.status(400).json({
               message: err.message || 'Unexpected error.'
           });
        }
    }
}