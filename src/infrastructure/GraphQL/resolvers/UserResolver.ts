import { Query, Resolver } from "type-graphql";
import { UserService } from "../../../application/services/UserService.js";
import { UserRepository } from "../../DataBase/repositories/UserRepository.js";
import { User } from "../../../domain/entities/User.js";


const userRepository = new UserRepository();
const userService = new UserService(userRepository);

@Resolver(User)
export class UserResolver {
    @Query(()=>[User])
    async users(){
        return userService.getAllUsers();
    }
}