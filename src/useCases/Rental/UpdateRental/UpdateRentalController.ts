import { Request, Response } from "express";
import { UpdateRentalUseCase } from "./UpdateRentalUseCase";

export class UpdateRentalController {
    constructor(
        private updateRentalUseCase: UpdateRentalUseCase,
    ){}

    async handle(req: Request, res: Response): Promise<Response> {
       const { id, idStatus }  = req.body;

       try {
            await this.updateRentalUseCase.execute({
                id, 
                idStatus,
           });

           return res.status(201).send();
       } catch (err) {
           return res.status(400).json({
               message: err.message || 'Unexpected error.'
           });
       }
    }
}