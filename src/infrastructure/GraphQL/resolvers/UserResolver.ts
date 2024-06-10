import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { UserService } from "../../../application/services/UserService.js";
import { UserRepository } from "../../DataBase/repositories/UserRepository.js";
import { User } from "../../../domain/entities/User.js";
import { UpdateUserInput, UserInput } from "../TypeDefs/inputs/UserInputs.js";
import { Project } from "../../../domain/entities/Project.js";


const userRepository = new UserRepository();
const userService = new UserService(userRepository);

@Resolver(User)
export class UserResolver {
    @Query(() => [User])
    async users() {

        return await userService.getAllUsers();
    }

    @Query(() => User)
    async user(@Arg("id", () => Number) id: number): Promise<User | null> {
        return await userService.getUserByID(id)
    }

    @Mutation(() => User)
    async createUser(@Arg("data", () => UserInput) data: UserInput): Promise<User> {
        return await userService.createUser(data)
    }

    @Mutation(() => User)
    async updateUser(@Arg("data", () => UpdateUserInput) data: UpdateUserInput): Promise<User | null> {
        return await userService.updateUser(data)
    }
}