import { BaseEntity, Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./User.js";
import { Stagestatus } from "./Stagestatus.js";
import { Task } from "./Task.js";
import { Project } from "./Project.js";


@Entity("projectstages", { schema: "grecords_projectsdb" })
export class Projectstage extends BaseEntity {
  @Column("int", { primary: true, name: "projectID" })
  projectId: number;

  @Column("int", { primary: true, name: "taskID" })
  taskId: number;

  @Column("int", { name: "userID", nullable: true })
  userId: number | null;

  @Column("date", { name: "startDatePlan", nullable: true })
  startDatePlan: Date | null;

  @Column("date", { name: "startDateFact", nullable: true })
  startDateFact: Date | null;

  @Column("date", { name: "endDatePlan", nullable: true })
  endDatePlan: Date | null;

  @Column("date", { name: "endDateFact", nullable: true })
  endDateFact: Date | null;

  @Column("int", { name: "statusID" })
  statusId: number;

  @Column("int", { name: "stageNumber" })
  stageNumber: number;

  @Column("text", { name: "stageDescription", nullable: true })
  stageDescription: string | null;

  @ManyToOne(() => User, (user) => user.projectstages, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "userID", referencedColumnName: "userId" }])
  user: User;

  @ManyToOne(() => Stagestatus, (stagestatus) => stagestatus.projectstages, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "statusID", referencedColumnName: "statusId" }])
  status: Stagestatus;

  @ManyToOne(() => Task, (task) => task.projectstages, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "taskID", referencedColumnName: "taskId" }])
  task: Task;

  @ManyToOne(() => Project, (project) => project.projectstages, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "projectID", referencedColumnName: "projectId" }])
  project: Project;
}
