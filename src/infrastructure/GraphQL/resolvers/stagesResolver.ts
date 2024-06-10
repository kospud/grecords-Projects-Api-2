import { Query, Resolver } from "type-graphql";
import { ProjectStagesService } from "../../../application/services/ProjectStageService.js";
import { ProjectStageRepository } from "../../DataBase/repositories/ProjectStageRepository.js";
import { Projectstage } from "../../../domain/entities/Projectstage.js";

const stagesRepository=new ProjectStageRepository()
const stagesService=new ProjectStagesService(stagesRepository)

@Resolver(Projectstage)
export class stagesResolver{

    @Query(()=>[Projectstage])
    async getCurrentStages(){
        console.log(await stagesService.getCurrentStages())
        return await stagesService.getCurrentStages();
    }
}