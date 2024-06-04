import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Comment } from "./Comment.js";
import { User } from "./User.js";
import { Projecttype } from "./Projecttype.js";
import { Projectstage } from "./Projectstage.js";


@Entity("projects", { schema: "grecords_projectsdb" })
export class Project extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "projectID" })
  projectId: number;

  @Column("varchar", { name: "projectName", length: 255 })
  projectName: string;

  @Column("int", { name: "userID" })
  userId: number;

  @Column("int", { name: "typeID" })
  typeId: number;

  @Column("date", { name: "startDatePlan", nullable: true })
  startDatePlan: Date | null;

  @Column("date", { name: "startDateFact", nullable: true })
  startDateFact: Date | null;

  @Column("date", { name: "endDatePlan", nullable: true })
  endDatePlan: Date | null;

  @Column("date", { name: "endDateFact", nullable: true })
  endDateFact: Date| null;

  @Column("text", { name: "projectDescription", nullable: true })
  projectDescription: string | null;

  @Column("tinyint", { name: "ended", width: 1 })
  ended: boolean;

  @OneToMany(() => Comment, (comment) => comment.project)
  comments: Comment[];

  @ManyToOne(() => User, (user) => user.projects, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "userID", referencedColumnName: "userId" }])
  user: User;

  @ManyToOne(() => Projecttype, (projecttype) => projecttype.projects, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "typeID", referencedColumnName: "typeId" }])
  type: Projecttype;

  @OneToMany(() => Projectstage, (projectstage) => projectstage.project)
  projectstages: Projectstage[];

  @ManyToMany(() => User, (users) => users.selectedProjects)
  users: User[];
}
