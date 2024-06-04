
import { buildSchema } from "type-graphql";
import { UserResolver } from "../../infrastructure/GraphQL/resolvers/UserResolver.js";


export const schema = buildSchema({
    resolvers:[UserResolver]
}) 