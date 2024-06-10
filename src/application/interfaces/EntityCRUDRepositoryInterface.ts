import { DeepPartial } from "typeorm";

//Базовый интерфейс для репозитория для совершения CRUD операций
export interface EntityCRUDRepositoryInterface<T>{
    createObject(entityLike: DeepPartial<T>): T
    getAll():Promise<T[]>
    getByID(id: number):Promise<T|null>
    add(entity: T): Promise<T>
    update(entity: T): Promise<T | null>
    delete(id: number): Promise<void>
}