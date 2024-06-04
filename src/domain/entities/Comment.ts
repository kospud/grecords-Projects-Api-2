import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { User } from "./User.js";
import { Project } from "./Project.js";


@Entity("comments", { schema: "grecords_projectsdb" })
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "commentID" })
  commentId: number;

  @Column("int", { name: "projectID" })
  projectId: number;

  @Column("int", { name: "userID" })
  userId: number;

  @Column("int", { name: "parrentCommentID" })
  parrentCommentId: number;

  @Column("text", { name: "commentText" })
  commentText: string;

  @Column("datetime", { name: "commentDate" })
  commentDate: Date;

  @ManyToOne(() => User, (users) => users.comments, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "userID", referencedColumnName: "userId" }])
  user: User;

  @ManyToOne(() => Comment, (comment) => comment.comments, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "parrentCommentID", referencedColumnName: "commentId" }])
  parrentComment: Comment;

  @OneToMany(() => Comment, (comment) => comment.parrentComment)
  comments: Comment[];

  @ManyToOne(() => Project, (project) => project.comments, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "projectID", referencedColumnName: "projectId" }])
  project: Project;
}
