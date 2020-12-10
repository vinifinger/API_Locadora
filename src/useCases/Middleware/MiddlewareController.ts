import { NextFunction, Request, Response } from "express";
import { MiddlewareUseCase } from "./MiddlewareUseCase";

export class MiddlewareController {
    constructor(
        private middlewareUseCase: MiddlewareUseCase,
    ){}

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
       const hash = req.headers.authorization;

       try {
            const response = await this.middlewareUseCase.execute({
                hash
           });

           switch(response) {
                case 0: 
                    return res.status(401).json({
                        message: 'No token provided.'
                    });

                case 1:
                    return res.status(401).json({
                        message: 'Token invalid.'
                    });

                case 2:
                    next();
                break;

                case 3: 
                    return res.status(401).json({
                        message: 'Login invalid.'
                    });

                case 4: 
                    return res.status(401).json({
                        message: 'Token in black list.'
                    });
           }
       } catch (err) {
           return res.status(400).json({
               message: err.message || 'Unexpected error.'
           });
       }
    }
}