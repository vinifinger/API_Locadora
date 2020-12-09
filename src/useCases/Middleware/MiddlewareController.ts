import { NextFunction, Request, Response } from "express";
import { MiddlewareUseCase } from "./MiddlewareUseCase";

export class MiddlewareController {
    constructor(
        private middlewareUseCase: MiddlewareUseCase,
    ){}

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
       const hash = String(req.headers.hash);

       try {
            const response = await this.middlewareUseCase.execute({
                hash
           });

           switch(response) {
                case 0: 
                    return res.status(401).json({
                        message: 'No token provided'
                    });
                break;

                case 1:
                    return res.status(401).json({
                        message: 'Token invalid'
                    });
                break;

                case 2:
                    next();
                break;

                case 3: 
                    return res.status(401).json({
                        message: 'Login invalid'
                    });
                break;
           }
       } catch (err) {
           return res.status(400).json({
               message: err.message || 'Unexpected error.'
           });
       }
    }
}