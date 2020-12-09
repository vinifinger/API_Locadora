import { Hash } from "../../../entities/Hash";
import { User } from "../../../entities/User";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(
        private userRepository: IUserRepository 
    ){}
    
    async execute(data: ICreateUserRequestDTO): Promise<Hash> {
        const user = new User(data);
        console.log('----- CREATE -----');
        console.log(user);
        
        const params = await this.userRepository.createUser(user);
        const result = await this.userRepository.createHash(params);
        return new Hash(result);
    }
}