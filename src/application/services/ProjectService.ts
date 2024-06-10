import { ProjectRepositoryInterface } from "../interfaces/ProjectRepositoryInterface.js";

export class ProjectService {
    constructor(private projectRepository: ProjectRepositoryInterface){}

    async getAllProjects(){
        return await this.projectRepository.getAll();
    }

    async getProjectsByType(typeId: number){
        return await this.projectRepository.getByType(typeId)
    }

    
}