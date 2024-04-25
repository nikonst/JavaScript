import express from "express";
import graphqlHTTP from "graphql-express"
import schema from "./data/schema.js";

const app = express()

const PORT = 8080

app.get('/', (req, res) => {
    res.send("GraphQL")
})

const root = { hello: () => "Hi form graphql" }

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))

app.listen(PORT, ()=> {
    console.log(`Running server at: ${PORT}`)
})