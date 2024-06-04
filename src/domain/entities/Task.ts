import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Projectstage } from "./Projectstage.js";
import { Template } from "./Template.js";

@Entity("tasks", { schema: "grecords_projectsdb" })
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "taskID" })
  taskId: number;

  @Column("varchar", { name: "taskName", length: 100 })
  taskName: string;

  @Column("int", { name: "timeDays", nullable: true })
  timeDays: number | null;

  @OneToMany(() => Projectstage, (projectstage) => projectstage.task)
  projectstages: Projectstage[];

  @OneToMany(() => Template, (template) => template.task)
  templates: Template[];
}
