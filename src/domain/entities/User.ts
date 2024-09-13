import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Comment } from "./Comment.js";
import { Project } from "./Project.js";
import { Projectstage } from "./Projectstage.js";
import { Usernotification } from "./Usernotification.js";
import { Field, ID, ObjectType } from "type-graphql";
import { GraphQLInt, GraphQLString } from "graphql";

@ObjectType()
@Entity("users", { schema: 'grecords_projectsdb' })
export class User extends BaseEntity {

  @Field(() => GraphQLInt)
  @PrimaryGeneratedColumn({ type: "int", name: "userID" })
  userId: number;

  @Field(() => GraphQLString)
  @Column("varchar", { name: "userName", length: 60 })
  userName: string;

  @Field(() => GraphQLString)
  @Column("varchar", { name: "userSurname", length: 60 })
  userSurname: string;

  @Field(() => GraphQLString)
  @Column("varchar", { name: "userEmail", length: 255 })
  userEmail: string;


  @Column("varchar", { name: "userPassword", length: 60 })
  userPassword: string;


  @OneToMany(() => Comment, (comments) => comments.user)
  comments: Comment[];

  @Field(()=>[Project])
  @OneToMany(() => Project, (projects) => projects.user)
  projects: Project[];

  @Field(()=>[Projectstage])
  @OneToMany(() => Projectstage, (projectstages) => projectstages.user)
  projectstages: Projectstage[];

  
  @ManyToMany(() => Project, (projects) => projects.users)
  @JoinTable({
    name: "selectedprojects",
    joinColumns: [{ name: "userID", referencedColumnName: "userId" }],
    inverseJoinColumns: [
      { name: "projectID", referencedColumnName: "projectId" },
    ],
    schema: "grecords_projectsdb",
  })
  selectedProjects: Project[];

  @OneToMany(
    () => Usernotification,
    (usernotifications) => usernotifications.user
  )
  usernotifications: Usernotification[];
  
}
