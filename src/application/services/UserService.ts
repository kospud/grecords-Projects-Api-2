import { User } from "../../domain/entities/User.js";
import { UserRepositoryInterface } from "../interfaces/UserRepositoryInterface.js";
import { UserServiceInterface } from "../interfaces/UserServiceInterface.js";

export class UserService implements UserServiceInterface {
    constructor(private userRepository: UserRepositoryInterface) { }

    getAllUsers(): Promise<User[]> {
        return this.userRepository.getAllUsers()
    }

    getUserByID(id: number): Promise<User | null> {
        return this.userRepository.getUserByID(id)
    }
    async createUser(user: User): Promise<User> {
        return this.userRepository.createUser(user)
    }

    async updateUser(user: User): Promise<User> {
        return this.userRepository.updateUser(user)
    }

    async deleteUser(id: number): Promise<void> {
        await this.userRepository.deleteUser(id)
    }

}