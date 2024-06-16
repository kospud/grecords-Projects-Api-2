import { GraphQLInt, GraphQLString } from "graphql";
import { Field, InputType } from "type-graphql";

@InputType()
export class UpdateStageInput {
    @Field(() => GraphQLInt)
    stageId: number;

    @Field(() => GraphQLInt, { nullable: true })
    userId?: number | null;

    @Field(() => GraphQLString, { nullable: true })
    startDatePlan?: Date | null;

    @Field(() => GraphQLString, { nullable: true })
    endDatePlan?: Date | null;

    @Field(() => GraphQLInt, { nullable: true })
    statusId?: number;

    @Field(() => GraphQLString, { nullable: true })
    stageDescription?: string | null;
}

@InputType()
export class UpdateStageStatusInput{
    @Field(()=>GraphQLInt)
    stageId: number

    @Field(()=>GraphQLInt)
    statusId: number
}