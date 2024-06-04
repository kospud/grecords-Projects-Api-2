import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Notification } from "./Notification.js"

@Entity("notificationtypes", { schema: "grecords_projectsdb" })
export class Notificationtype extends BaseEntity{
  @PrimaryGeneratedColumn({ type: "int", name: "typeID" })
  typeId: number;

  @Column("varchar", { name: "typeName", length: 40 })
  typeName: string;

  @OneToMany(() => Notification, (notification) => notification.type)
  notifications: Notification[];
}
