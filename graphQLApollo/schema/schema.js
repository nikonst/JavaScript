export const typeDefs = `#graphql
  type Book {
    id: String!
    title: String!
    author: Int!
    pages: Int
    price: Float
  }

  type Author {
    id: Int!
    name: String!
    address: Int!
  }

  type Address {
    id: Int!
    street: String!
    city: String
    country: String
    author: String!
  }

  type Query {
    books: [Book]
    book(id: String!): Book
  }
`
