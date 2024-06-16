import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Projectstage } from "./Projectstage.js";
import { Field, ID, ObjectType } from "type-graphql";
import { GraphQLInt, GraphQLString } from "graphql";

@ObjectType()
@Entity("stagestatus", { schema: "grecords_projectsdb" })
export class Stagestatus extends BaseEntity{
  @Field(()=>GraphQLInt)
  @PrimaryGeneratedColumn({ type: "int", name: "statusID" })
  statusId: number;

  @Field(()=>GraphQLString)
  @Column("varchar", { name: "statusName", length: 100 })
  statusName: string;

  @OneToMany(() => Projectstage, (projectstage) => projectstage.status)
  projectstages: Projectstage[];
}
