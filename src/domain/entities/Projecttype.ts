import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Project } from "./Project.js";
import { Template } from "./Template.js";

@Entity("projecttypes", { schema: "grecords_projectsdb" })
export class Projecttype extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "typeID" })
  typeId: number;

  @Column("varchar", { name: "typeName", length: 100 })
  typeName: string;

  @OneToMany(() => Project, (project) => project.type)
  projects: Project[];

  @OneToMany(() => Template, (template) => template.type)
  templates: Template[];
}
