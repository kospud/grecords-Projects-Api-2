import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Projectstage } from "./Projectstage.js";
import { Template } from "./Template.js";
import { Field, ID, ObjectType } from "type-graphql";
import { GraphQLInt, GraphQLString } from "graphql";

@ObjectType()
@Entity("tasks", { schema: "grecords_projectsdb" })
export class Task extends BaseEntity {

  @Field(()=>ID)
  @PrimaryGeneratedColumn({ type: "int", name: "taskID" })
  taskId: number;

  @Field(()=>GraphQLString)
  @Column("varchar", { name: "taskName", length: 100 })
  taskName: string;

  @Field(()=>GraphQLInt)
  @Column("int", { name: "timeDays", nullable: true })
  timeDays: number | null;

  @OneToMany(() => Projectstage, (projectstage) => projectstage.task)
  projectstages: Projectstage[];

  @OneToMany(() => Template, (template) => template.task)
  templates: Template[];
}
