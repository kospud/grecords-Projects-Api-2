import { GraphQLString } from "graphql";
import { Field, ID, InputType } from "type-graphql";

@InputType()
export class UserInput{

    @Field(() => GraphQLString)
    userName: string;

    @Field(() => GraphQLString)
    userSurname: string;

    @Field(() => GraphQLString)
    userEmail: string;

    @Field(() => GraphQLString)
    userPassword: string;
}

@InputType()
export class UpdateUserInput { 

    @Field(() => ID)
    userId: number;

    @Field(() => GraphQLString,{nullable: true})
    userName?: string;

    @Field(() => GraphQLString,{nullable: true})
    userSurname?: string;

    @Field(() => GraphQLString,{nullable: true})
    userEmail?: string;
}