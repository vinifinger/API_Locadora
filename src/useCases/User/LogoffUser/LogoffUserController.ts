import { Request, Response } from "express";
import { LogoffUserUseCase } from "./LogoffUserUseCase";

export class LogoffUserController {
    constructor(
        private logoffUserUseCase: LogoffUserUseCase,
    ){}

    async handle(req: Request, res: Response): Promise<Response> {
       const hash  = req.headers.authorization;

       try {
            await this.logoffUserUseCase.execute({
                hash
           });
           
           return res.status(200).send();
       } catch (err) {
           return res.status(400).json({
               message: err.message || 'Unexpected error.'
           });
       }
    }
}