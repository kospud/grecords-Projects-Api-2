import { DeepPartial } from "typeorm";
import { IProjectStageRepository } from "../../../application/interfaces/projectStagesInterface.js";
import { Projectstage } from "../../../domain/entities/Projectstage.js";
import { AppDataSource } from "../DataSource.js";

export class ProjectStageRepository implements IProjectStageRepository{

    private repository=AppDataSource.getRepository(Projectstage)

    createObject(entityLike: DeepPartial<Projectstage>): Projectstage {
        return this.repository.create(entityLike)
    }

    async getAll(): Promise<Projectstage[]> {
        return await this.repository.find()
    }

    async getByID(id: number): Promise<Projectstage | null> {
        return await this.repository.findOneBy({stageId: id})
    }

    async add(entity: Projectstage): Promise<Projectstage> {
        return await this.repository.save(entity)
    }

    async update(entity: Projectstage): Promise<Projectstage | null> {
        return await this.repository.save(entity)
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id)
    }

    getCurrentStages(): Promise<Projectstage[]> {
        return this.repository.find({where: {statusId: 2}, relations: ["project", "user", "project.user"], relationLoadStrategy: 'query'})
    }
}