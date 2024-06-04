import { BaseEntity, Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Task } from "./Task.js";
import { Projecttype } from "./Projecttype.js";


@Entity("templates", { schema: "grecords_projectsdb" })
export class Template extends BaseEntity {
  @Column("int", { primary: true, name: "typeID" })
  typeId: number;

  @Column("int", { primary: true, name: "taskID" })
  taskId: number;

  @Column("int", { name: "defaultOrder" })
  defaultOrder: number;

  @ManyToOne(() => Task, (task) => task.templates, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "taskID", referencedColumnName: "taskId" }])
  task: Task;

  @ManyToOne(() => Projecttype, (projecttype) => projecttype.templates, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "typeID", referencedColumnName: "typeId" }])
  type: Projecttype;
}
