import { DeepPartial } from "typeorm";
import { UserRepositoryInterface } from "../../../application/interfaces/UserRepositoryInterface.js";
import { Project } from "../../../domain/entities/Project.js";
import { User } from "../../../domain/entities/User.js";
import { UpdateUserInput, UserInput } from "../../GraphQL/TypeDefs/inputs/UserInputs.js";
import { AppDataSource } from "../DataSource.js";

export class UserRepository implements UserRepositoryInterface {
    private repository = AppDataSource.getRepository(User)

    createObject(entityLike: DeepPartial<User>): User {
        return this.repository.create(entityLike);
    }

    async getAll(): Promise<User[]> {
        return this.repository.find();
    }

    async getByID(id: number): Promise<User | null> {
        return this.repository.findOne({ where: {userId: id}})
    }

    async add(user: User): Promise<User> {
        return this.repository.save(user)
    }

    async update(user: User): Promise<User | null> {
        await this.repository.update(user.userId, user)
        return this.repository.findOneBy({userId: user.userId})
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id)

    }
}

