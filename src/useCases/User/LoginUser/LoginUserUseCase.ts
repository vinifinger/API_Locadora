import { Hash } from "../../../entities/Hash";
import { User } from "../../../entities/User";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { ILoginUserRequestDTO } from "./LoginUserDTO";

export class LoginUserUseCase {
    constructor(
        private userRepository: IUserRepository
    ){}
    
    async execute(data: ILoginUserRequestDTO) {
        const user = new User(data);
        
        const params = await this.userRepository.loginUser(user);

        if (!params) 
            throw new Error('User and/or Password invalid.');
        
        user.name = params[0].name;
        
        const result = await this.userRepository.createHash(user);
        return new Hash(result);
    }
}