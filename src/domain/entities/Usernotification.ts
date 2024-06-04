import { BaseEntity, Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./User.js";
import { Notification } from "./Notification.js";


@Entity("usernotifications", { schema: "grecords_projectsdb" })
export class Usernotification extends BaseEntity {
  @Column("int", { primary: true, name: "userID" })
  userId: number;

  @Column("int", { primary: true, name: "notificationID" })
  notificationId: number;

  @Column("tinyint", { name: "viewed", nullable: true, width: 1 })
  viewed: boolean | null;

  @ManyToOne(() => User, (user) => user.usernotifications, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "userID", referencedColumnName: "userId" }])
  user: User;

  @ManyToOne(
    () => Notification,
    (notification) => notification.usernotifications,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([
    { name: "notificationID", referencedColumnName: "notificationId" },
  ])
  notification: Notification;
}
