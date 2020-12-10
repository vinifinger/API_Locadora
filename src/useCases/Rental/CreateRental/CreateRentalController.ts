import { Request, Response } from "express";
import { CreateRentalUseCase } from "./CreateRentalUseCase";

export class CreateRentalController {
    constructor(
        private createRentalUseCase: CreateRentalUseCase,
    ){}

    async handle(req: Request, res: Response): Promise<Response> {
       const { emailUser, idMovie, idStatus, dateStart, dateEnd }  = req.body;

       try {
            await this.createRentalUseCase.execute({
                emailUser,
                idMovie,
                idStatus,
                dateStart,
                dateEnd
           });

           return res.status(201).send();
       } catch (err) {
           return res.status(400).json({
               message: err.message || 'Unexpected error.'
           });
       }
    }
}