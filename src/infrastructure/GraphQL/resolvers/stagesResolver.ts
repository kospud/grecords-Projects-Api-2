import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { ProjectStagesService } from "../../../application/services/ProjectStageService.js";
import { ProjectStageRepository } from "../../DataBase/repositories/ProjectStageRepository.js";
import { Projectstage } from "../../../domain/entities/Projectstage.js";
import { UpdateStageInput } from "../TypeDefs/inputs/projectStageInput.js";

const stagesRepository = new ProjectStageRepository()
const stagesService = new ProjectStagesService(stagesRepository)

@Resolver(Projectstage)
export class stagesResolver {

    @Query(() => [Projectstage])
    async CurrentStages() {

        return await stagesService.getCurrentStages();
    }

    @Query(() => [Projectstage])
    async stages(
        @Arg('userId', () => Number, { nullable: true }) userId?: number,
        @Arg('projectId', () => Number, { nullable: true }) projectId?: number
    ) {
        return await stagesService.getAllStages(userId, projectId)
    }

    @Query(()=>Projectstage)
    async stage(
        @Arg('id',()=>Number) id: number
    ){
        return await stagesService.getStageByID(id)
    }

    @Mutation(() => Projectstage)
    async updateStage(
        @Arg('data', ()=> UpdateStageInput) data: UpdateStageInput
    ){
        return await stagesService.updateStage(data)
    }
}