import { Projectstage } from "../../domain/entities/Projectstage.js";
import { EntityCRUDRepositoryInterface } from "./EntityCRUDRepositoryInterface.js";

export interface IProjectStageRepository extends EntityCRUDRepositoryInterface<Projectstage>{
    getCurrentStages():Promise<Projectstage[]>
    getAll(userId?: number, projectId?: number): Promise<Projectstage[]>
}