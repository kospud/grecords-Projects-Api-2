import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Projectstage } from "./Projectstage.js";

@Entity("stagestatus", { schema: "grecords_projectsdb" })
export class Stagestatus extends BaseEntity{
  @PrimaryGeneratedColumn({ type: "int", name: "statusID" })
  statusId: number;

  @Column("varchar", { name: "statusName", length: 100 })
  statusName: string;

  @OneToMany(() => Projectstage, (projectstage) => projectstage.status)
  projectstages: Projectstage[];
}
