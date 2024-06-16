import { DeepPartial, FindManyOptions } from "typeorm";
import { IProjectStageRepository } from "../../../application/interfaces/IProjectStagesRepository.js";
import { Projectstage } from "../../../domain/entities/Projectstage.js";
import { AppDataSource } from "../DataSource.js";

const querySettings={relations: ["project", "user", "task", "status"] }

export class ProjectStageRepository implements IProjectStageRepository {

    private repository = AppDataSource.getRepository(Projectstage)

    createObject(entityLike: DeepPartial<Projectstage>): Projectstage {
        return this.repository.create(entityLike)
    }

    async getAll(userId?: number | undefined, projectId?: number | undefined): Promise<Projectstage[]> {
        return await this.repository.find({...querySettings, where: { userId: userId, projectId: projectId } })
    }

    async getByID(id: number): Promise<Projectstage | null> {
        return await this.repository.findOne({ where: {stageId: id}, ...querySettings })
    }

    async add(entity: Projectstage): Promise<Projectstage> {
        return await this.repository.save(entity)
    }

    async update(entity: Projectstage): Promise<Projectstage | null> {
        const stage=await this.repository.save(entity)
        return await this.getByID(stage.stageId)
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id)
    }

    getCurrentStages(): Promise<Projectstage[]> {
        return this.repository.find({ where: { statusId: 2 }, relations: ["project", "user", "project.user"], relationLoadStrategy: 'query' })
    }
}