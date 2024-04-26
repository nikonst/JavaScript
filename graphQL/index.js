import express from "express"
import { createHandler } from "graphql-http/lib/use/express"
import { ruruHTML } from "ruru/server"
import schema from "./data/schema.js";
import resolvers from "./data/resolvers.js";

const app = express()

const PORT = 4000

const root = resolvers

app.all(
    "/graphql",
    createHandler({
        schema: schema,
        rootValue: root,
    })
)
// Serve the GraphiQL IDE.
app.get("/", (_req, res) => {
    res.type("html")
    res.end(ruruHTML({ endpoint: "/graphql" }))
})

app.listen(PORT, () => {
    console.log(`Running server at: ${PORT}`)
})