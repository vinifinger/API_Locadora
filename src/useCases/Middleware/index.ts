import { JwtMiddlewareRepository } from "../../repositories/implementations/JwtMiddlewareRepository";
import { MiddlewareController } from "./MiddlewareController";
import { MiddlewareUseCase } from "./MiddlewareUseCase";

const  jwtMiddlewareRepository = new JwtMiddlewareRepository();

const middlewareUseCase = new MiddlewareUseCase(
    jwtMiddlewareRepository
);

const middlewareController = new MiddlewareController(
    middlewareUseCase
);

export { middlewareUseCase, middlewareController }