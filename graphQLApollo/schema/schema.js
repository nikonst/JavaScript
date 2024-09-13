export const typeDefs = `#graphql
  type Book {
    id: String!
    title: String!
    author: String
    pages: Int
    price: Float
  }

  type Query {
    books: [Book]
    book(id: String!): Book
  }
`
