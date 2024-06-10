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
import { Field, ID, ObjectType } from "type-graphql";
import { GraphQLBoolean, GraphQLInt, GraphQLString } from "graphql";
import { GraphQLDate } from "graphql-scalars";

@ObjectType()
@Entity("projects", { schema: "grecords_projectsdb" })
export class Project extends BaseEntity {

  @Field(()=>ID)
  @PrimaryGeneratedColumn({ type: "int", name: "projectID" })
  projectId: number;

  @Field(()=>GraphQLString)
  @Column("varchar", { name: "projectName", length: 255 })
  projectName: string;

  @Field(()=>GraphQLInt)
  @Column("int", { name: "userID" })
  userId: number;

  @Field(()=>GraphQLInt)
  @Column("int", { name: "typeID" })
  typeId: number;

  @Field(()=>GraphQLDate)
  @Column("date", { name: "startDatePlan", nullable: true })
  startDatePlan?: Date | null;

  @Field(()=>GraphQLDate)
  @Column("date", { name: "startDateFact", nullable: true })
  startDateFact?: Date | null;

  @Field(()=>GraphQLDate)
  @Column("date", { name: "endDatePlan", nullable: true })
  endDatePlan?: Date | null;

  @Field(()=>GraphQLDate)
  @Column("date", { name: "endDateFact", nullable: true })
  endDateFact?: Date | null;

  @Field(()=>GraphQLString)
  @Column("text", { name: "projectDescription", nullable: true })
  projectDescription: string | null;

  @Field(()=>GraphQLBoolean)
  @Column("tinyint", { name: "ended", width: 1 })
  ended: boolean;

  @OneToMany(() => Comment, (comment) => comment.project)
  comments: Comment[];

  @Field(()=>User)
  @ManyToOne(() => User, (user) => user.projects, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "userID", referencedColumnName: "userId" }])
  user: User;

  @ManyToOne(() => Projecttype, (projecttype) => projecttype.projects, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "typeID", referencedColumnName: "typeId" }])
  type: Projecttype;

  @OneToMany(() => Projectstage, (projectstage) => projectstage.project)
  projectstages: Projectstage[];

  @ManyToMany(() => User, (users) => users.selectedProjects)
  users: User[];
}
