import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Project } from "./Project.js";
import { Template } from "./Template.js";
import { Field, ID, ObjectType } from "type-graphql";
import { GraphQLString } from "graphql";

@ObjectType()
@Entity("projecttypes", { schema: "grecords_projectsdb" })
export class Projecttype extends BaseEntity {
  
  @Field(()=>ID)
  @PrimaryGeneratedColumn({ type: "int", name: "typeID" })
  typeId: number;

  @Field(()=>GraphQLString)
  @Column("varchar", { name: "typeName", length: 100 })
  typeName: string;

  
  @OneToMany(() => Project, (project) => project.type)
  projects: Project[];

  @OneToMany(() => Template, (template) => template.type)
  templates: Template[];
}
