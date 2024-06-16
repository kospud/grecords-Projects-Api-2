
import { User } from "../../domain/entities/User.js";
import { EntityCRUDRepositoryInterface } from "./EntityCRUDRepositoryInterface.js";
//Репозиторий для работы с сущностью пользователя
export interface UserRepositoryInterface extends EntityCRUDRepositoryInterface<User> {
    getByEMail(email: string): Promise<User | null>
}
