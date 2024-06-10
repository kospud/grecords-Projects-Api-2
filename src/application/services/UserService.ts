import { Project } from "../../domain/entities/Project.js";
import { User } from "../../domain/entities/User.js";
import { UpdateUserInput, UserInput } from "../../infrastructure/GraphQL/TypeDefs/inputs/UserInputs.js";
import { UserRepositoryInterface } from "../interfaces/UserRepositoryInterface.js";
import { UserServiceInterface } from "../interfaces/UserServiceInterface.js";
import bcryptjs from "bcryptjs";

export class UserService implements UserServiceInterface {
    constructor(private userRepository: UserRepositoryInterface) { }

    getAllUsers(): Promise<User[]> {
        return this.userRepository.getAll()
    }

    getUserByID(id: number): Promise<User | null> {
        return this.userRepository.getByID(id)
    }
    async createUser(user: UserInput): Promise<User> {

        const salt = bcryptjs.genSaltSync(15);
        user.userPassword = bcryptjs.hashSync(user.userPassword, salt)
        const newUser = this.userRepository.createObject(user)

        return this.userRepository.add(newUser)
    }

    async updateUser(user: UpdateUserInput): Promise<User | null> {
        const changedUser = this.userRepository.createObject(user)
        
        return this.userRepository.update(changedUser)
    }

    async deleteUser(id: number): Promise<void> {
        await this.userRepository.delete(id)
    }

    async getUsersProjects(id: number): Promise<Project[]> {
        const user=await this.userRepository.getByID(id)
        console.log(user)
        console.log(user?.projects)
        return user?.projects!
    }

}