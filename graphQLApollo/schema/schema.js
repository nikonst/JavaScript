export const typeDefs = `#graphql
  type Book {
    id: Int!
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

  type BookAndAuthor {
    title: String!
    authorName: String!
  }
    
  type Query {
    books: [Book]
    book(id: Int!): Book
    authors: [Author]
    addressAuthor(name: String!): Address
    booksAndAuthors: [BookAndAuthor]
  }
`
