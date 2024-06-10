
import { Project } from "../../domain/entities/Project.js";
import { EntityCRUDRepositoryInterface } from "./EntityCRUDRepositoryInterface.js";

export interface ProjectRepositoryInterface extends EntityCRUDRepositoryInterface<Project>{
   
    getByType(typeID: number): Promise<Project[]>
}