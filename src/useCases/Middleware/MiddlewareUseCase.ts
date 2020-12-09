import { Hash } from "../../entities/Hash";
import { IMiddlewareRepository } from "../../repositories/IMiddlewareRepository";
import { IMiddlewareDTO } from "./MiddlewareDTO";

export class MiddlewareUseCase {
    constructor(
        private middlewareRepository: IMiddlewareRepository
    ){}
    
    async execute(data: IMiddlewareDTO) {
        const hash = new Hash(data);
        console.log('----- MIDDLEWARE -----');
        console.log(hash);
        
        return await this.middlewareRepository.verifyHash(hash);
    }   
}