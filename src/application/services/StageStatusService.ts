import { IStageStatusRepository } from "../interfaces/IStageStatusRepository.js";

export class StageStatusService{
    constructor(private repository: IStageStatusRepository){}

    async getAllStages(){
        return await this.repository.getAll()
    }
}