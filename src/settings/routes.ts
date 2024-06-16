import { Application } from "express"
import { graphqlHTTP } from "express-graphql"
import { schema } from "../presentation/graphQL/schema.js"

export const routes=async (app: Application): Promise<void> => {

    app.use('/graphql', graphqlHTTP({
        schema: await schema,
        graphiql: true
    }))

}