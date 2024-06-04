import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Notificationtype } from "./Notificationtype.js";
import { Usernotification } from "./Usernotification.js";


@Entity("notifications", { schema: "grecords_projectsdb" })

export class Notification extends BaseEntity{
  @PrimaryGeneratedColumn({ type: "int", name: "notificationID" })
  notificationId: number;

  @Column("int", { name: "typeID" })
  typeId: number;

  @Column("varchar", { name: "notificationText", length: 255 })
  notificationText: string;

  @Column("varchar", { name: "link", length: 255 })
  link: string;

  @ManyToOne(
    () => Notificationtype,
    (notificationtype) => notificationtype.notifications,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "typeID", referencedColumnName: "typeId" }])
  type: Notificationtype;

  @OneToMany(
    () => Usernotification,
    (usernotifications) => usernotifications.notification
  )
  usernotifications: Usernotification[];
}
