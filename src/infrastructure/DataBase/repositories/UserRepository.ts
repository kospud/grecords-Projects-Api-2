import { UserRepositoryInterface } from "../../../application/interfaces/UserRepositoryInterface.js";
import { Project } from "../../../domain/entities/Project.js";
import { User } from "../../../domain/entities/User.js";
import { AppDataSource } from "../DataSource.js";

export class UserRepository implements UserRepositoryInterface {
    private repository = AppDataSource.getRepository(User)

    async getAllUsers(): Promise<User[]> {
        return this.repository.find();
    }

    async getUserByID(id: number): Promise<User | null> {
        return this.repository.findOneBy({ userId: id })
    }

    async createUser(user: User): Promise<User> {
        return this.repository.save(user)
    }

    async updateUser(user: User): Promise<User> {
        return this.repository.save(user)
    }

    async deleteUser(id: number): Promise<void> {
        await this.repository.delete(id)

    }
}