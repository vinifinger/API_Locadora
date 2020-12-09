import { Hash } from "../../../entities/Hash";
import { User } from "../../../entities/User";
import jwt from 'jsonwebtoken';
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
        return new Hash(params[0]);
    }
}