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
    address: Address!
  }

  type Address {
    id: Int!
    street: String!
    city: String
    country: String
    author: Author
  }

  type BookAndAuthor {
    title: String!
    authorName: String!
  }
  
  type Query {
    books: [Book]
    book(id: Int!): Book
    authors: [Author]
    author(id: Int!): Author
    addresses: [Address]
    address(id: Int!): Address
    addressAuthor(name: String!): Address
    booksAndAuthors: [BookAndAuthor]
    booksByAuthor(name: String!): [Book]
  }
`
