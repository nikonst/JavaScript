import express from "express";
import { createHandler } from 'graphql-http/lib/use/express';
import schema from "./data/schema.js";

const app = express()

const PORT = 8080

app.get('/', (req, res) => {
    res.send("GraphQL")
})

const root = { hello: () => "Hi from graphql" }

app.all('/graphql', createHandler({ 
    schema: schema,
    rootValue: root,
  }));

app.listen(PORT, ()=> {
    console.log(`Running server at: ${PORT}`)
})