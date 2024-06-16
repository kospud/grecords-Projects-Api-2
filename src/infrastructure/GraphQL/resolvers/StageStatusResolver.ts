import { Query, Resolver } from "type-graphql";
import { Stagestatus } from "../../../domain/entities/Stagestatus.js";
import { StageStatusRepository } from "../../DataBase/repositories/StageStatusRepository.js";
import { StageStatusService } from "../../../application/services/StageStatusService.js";

const stageStatusRepository=new StageStatusRepository()
const stageStatusService=new StageStatusService(stageStatusRepository)

@Resolver(Stagestatus)
export class StageStatusResolver{

    @Query(()=>[Stagestatus])
    async stageStatuses(){
        return await stageStatusService.getAllStages()
    }

}