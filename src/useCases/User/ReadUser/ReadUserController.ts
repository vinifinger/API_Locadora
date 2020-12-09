import { Request, Response } from "express";
import { ReadUserUseCase } from "./ReadUserUseCase";

export class ReadUserController {
    constructor(
        private readUserUseCase: ReadUserUseCase,
    ){}

    async handle(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

       try {
            const result = await this.readUserUseCase.execute({email, password});
            console.log('----- READ -----');
            console.log(result);

           return res.status(200).json({ hash: result });
       } catch (err) {
           return res.status(400).json({
               message: err.message || 'Unexpected error.'
           });
       }
    }
}