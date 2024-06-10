
import { buildSchema } from "type-graphql";
import { UserResolver } from "../../infrastructure/GraphQL/resolvers/UserResolver.js";
import { stagesResolver } from "../../infrastructure/GraphQL/resolvers/stagesResolver.js";


export const schema = buildSchema({
    resolvers:[UserResolver, stagesResolver]
}) 