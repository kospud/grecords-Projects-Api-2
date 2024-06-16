import { DeepPartial } from "typeorm";
import { IStageStatusRepository } from "../../../application/interfaces/IStageStatusRepository.js";
import { Stagestatus } from "../../../domain/entities/Stagestatus.js";
import { AppDataSource } from "../DataSource.js";

export class StageStatusRepository implements IStageStatusRepository{
    private repository=AppDataSource.getRepository(Stagestatus)
    createObject(entityLike: DeepPartial<Stagestatus>): Stagestatus {
        return this.repository.create(entityLike)
    }

    async getAll(): Promise<Stagestatus[]> {
        return await this.repository.find()
    }

    async getByID(id: number): Promise<Stagestatus | null> {
        return await this.repository.findOne({where: {statusId: id}})
    }

    async add(entity: Stagestatus): Promise<Stagestatus> {
        return await this.repository.save(entity)
    }

    async update(entity: Stagestatus): Promise<Stagestatus | null> {
        return await this.repository.save(entity)
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id)
    }
}