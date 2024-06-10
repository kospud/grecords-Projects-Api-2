import { BaseEntity, Column, Entity, Index, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./User.js";
import { Stagestatus } from "./Stagestatus.js";
import { Task } from "./Task.js";
import { Project } from "./Project.js";
import { Field, ID, ObjectType } from "type-graphql";
import { GraphQLInt, GraphQLString } from "graphql";
import { GraphQLDate } from "graphql-scalars";

@ObjectType()
@Entity("projectstages", { schema: "grecords_projectsdb" })
export class Projectstage extends BaseEntity {
  @Field(()=>ID)
  @PrimaryColumn("int", { primary: true, name: "stageID" })
  stageId: number

  @Field(()=>GraphQLInt)
  @Column("int", { name: "projectID" })
  projectId: number;

  @Field(()=>GraphQLInt)
  @Column("int", { name: "taskID" })
  taskId: number;

  @Field(()=>GraphQLInt)
  @Column("int", { name: "userID", nullable: true })
  userId: number | null;

  @Field(()=>GraphQLDate)
  @Column("date", { name: "startDatePlan", nullable: true })
  startDatePlan: Date | null;

  @Field(()=>GraphQLDate)
  @Column("date", { name: "startDateFact", nullable: true })
  startDateFact: Date | null;

  @Field(()=>GraphQLDate)
  @Column("date", { name: "endDatePlan", nullable: true })
  endDatePlan: Date | null;

  @Field(()=>GraphQLDate)
  @Column("date", { name: "endDateFact", nullable: true })
  endDateFact: Date | null;

  @Field(()=>GraphQLInt)
  @Column("int", { name: "statusID" })
  statusId: number;

  @Field(()=>GraphQLInt)
  @Column("int", { name: "stageNumber" })
  stageNumber: number;

  @Field(()=>GraphQLString)
  @Column("text", { name: "stageDescription", nullable: true })
  stageDescription: string | null;

  @Field(()=>User, {nullable: true})
  @ManyToOne(() => User, (user) => user.projectstages, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "userID", referencedColumnName: "userId" }])
  user: User | null;

  @Field(()=>Projectstage)
  @ManyToOne(() => Stagestatus, (stagestatus) => stagestatus.projectstages, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "statusID", referencedColumnName: "statusId" }])
  status: Stagestatus;

  @Field(()=>Task)
  @ManyToOne(() => Task, (task) => task.projectstages, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "taskID", referencedColumnName: "taskId" }])
  task: Task;

  @Field(()=>Project)
  @ManyToOne(() => Project, (project) => project.projectstages, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "projectID", referencedColumnName: "projectId" }])
  project: Project;
}
