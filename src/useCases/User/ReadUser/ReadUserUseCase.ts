import { Hash } from "../../../entities/Hash";
import { User } from "../../../entities/User";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { IReadUserRequestDTO } from "./ReadUserDTO";

export class ReadUserUseCase {
    constructor(
        private userRepository: IUserRepository
    ){}
    
    async execute(data: IReadUserRequestDTO): Promise<Hash> {
        const user = new User(data);
        console.log('----- READ BY NAME -----');
        console.log(user);
        
        const params = await this.userRepository.readUserbyLogin(user);
        const result = await this.userRepository.createHash(params);
        return new Hash(result);
    }
}