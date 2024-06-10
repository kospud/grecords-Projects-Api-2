import { DeepPartial } from "typeorm";
import { Project } from "../../../domain/entities/Project.js";
import { AppDataSource } from "../DataSource.js";
import { ProjectRepositoryInterface } from "../../../application/interfaces/ProjectRepositoryInterface.js";

export class ProjectRepository implements ProjectRepositoryInterface {

    private repository = AppDataSource.getRepository(Project)

    async getAll(): Promise<Project[]> {
        return await this.repository.find({ relations: ["user", "type"] });
    }

    async getByID(id: number): Promise<Project | null> {
        return await this.repository.findOne({ where: { projectId: id }, relations: ["coments","user","projectstages,type"] })
    }

    async getByType(typeID: number): Promise<Project[]> {
        const p = new Project()
        /*const projects = await this.repository.createQueryBuilder()
            .leftJoinAndSelect("project.user", 'user')
            .leftJoinAndSelect("project.projecttype", "projecttype")
            .leftJoinAndSelect("project.projectstages", "projectstage", "projectstage.statusId=:status", { status: 2 })
            .where("project.typeId=:typeId", { typeId: typeID })
            .getMany*/
        return await this.repository.find({ where: { typeId: typeID }, relations: ["user", "type", "projectstages"] })
    }

    async add(project: Project): Promise<Project> {
        return await this.repository.save(project)
    }

    async update(project: Project): Promise<Project | null> {
        return await this.repository.save(project)
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id)
    }

    createObject(entityLike: DeepPartial<Project>): Project {
        return this.repository.create(entityLike)
    }
}