import { Hash } from "../../../entities/Hash";
import { User } from "../../../entities/User";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(
        private userRepository: IUserRepository 
    ){}
    
    async execute(data: ICreateUserRequestDTO) {
        const user = new User(data);
        
        const content = await this.userRepository.findUserbyemail(data.email);

        if (content.email) {
            throw new Error('Email already exists.');
        }

        const params = await this.userRepository.createUser(user);
        const result = await this.userRepository.createHash(params);
        return new Hash(result);
    }
}