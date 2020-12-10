import { Hash } from "../../../entities/Hash";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { ILogoffUserRequestDTO } from "./LogoffUserDTO";

export class LogoffUserUseCase {
    constructor(
        private userRepository: IUserRepository 
    ){}
    
    async execute(data: ILogoffUserRequestDTO): Promise<void> {
        const hash = new Hash(data);
        ('----- LOGOFF -----');
        (hash);
        
        return await this.userRepository.deleteHash(hash);
    }
}