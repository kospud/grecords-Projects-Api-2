import { Stagestatus } from "../../domain/entities/Stagestatus.js";
import { EntityCRUDRepositoryInterface } from "./EntityCRUDRepositoryInterface.js";

export interface IStageStatusRepository extends EntityCRUDRepositoryInterface<Stagestatus>{
    
}