import { DeepPartial } from "typeorm";
import { IProjectStageRepository } from "../interfaces/IProjectStagesRepository.js";
import { Projectstage } from "../../domain/entities/Projectstage.js";

export class ProjectStagesService {
    constructor(private ProjectStagesRepository: IProjectStageRepository) { }

    async getAllStages(userId?: number, projectId?: number) {
        return await this.ProjectStagesRepository.getAll(userId,projectId)
    }

    async getCurrentStages(){
        return await this.ProjectStagesRepository.getCurrentStages()
    }

    async getStageByID(id: number){
        return await this.ProjectStagesRepository.getByID(id)
    }

    async addStage(stage: DeepPartial<Projectstage>){
        const newStage=this.ProjectStagesRepository.createObject(stage)
        return await this.ProjectStagesRepository.add(newStage)
    }

    async updateStage(stage: DeepPartial<Projectstage>){
        const newStage=this.ProjectStagesRepository.createObject(stage)
        return await this.ProjectStagesRepository.update(newStage)
    }

}