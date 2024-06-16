import { UserRepositoryInterface } from "../interfaces/UserRepositoryInterface.js";
import * as bcrypt from 'bcryptjs'

export class AuthService {
    constructor(private userRepository: UserRepositoryInterface) { }

    async validateUser(email: string, password: string){
        const user=await this.userRepository.getByEMail(email)

        if(user && await bcrypt.compare(password, user.userPassword))
        {
            return user
        }

        return null;
    }


}