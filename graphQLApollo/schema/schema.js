export const typeDefs = `#graphql
  type Book {
    id: ID!
    title: String!
    author: String
    pages: Int
    price: Float
  }

  type Query {
    books: [Book]
  }
`
