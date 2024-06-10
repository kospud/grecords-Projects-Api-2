
import { User } from "../../domain/entities/User.js";
import { UserRepository } from "../../infrastructure/DataBase/repositories/UserRepository.js";
import { EntityCRUDRepositoryInterface } from "./EntityCRUDRepositoryInterface.js";
import { ProjectRepository } from "./ProjectRepositoryInterface.js";
//Репозиторий для работы с сущностью пользователя
export interface UserRepositoryInterface extends EntityCRUDRepositoryInterface<User> {
    /*
    getAllUsers(): Promise<User[]>; 
    getUserByID(id: number): Promise<User | null>;
    addUser(user: User): Promise<User>;
    updateUser(user: User): Promise<User | null>;
    deleteUser(id: number): Promise<void>;
    createUser(entityLike: DeepPartial<User>): User;//создает экземпляр сущности пользователя из похожей*/
}
