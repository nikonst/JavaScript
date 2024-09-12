export const typeDefs = `#graphql
  type Book {
    id: {
        ID!
    }
    title: String!
    author: String
    pages: int
    price: float
  }
`
