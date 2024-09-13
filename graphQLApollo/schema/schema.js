export const typeDefs = `#graphql
  type objID {
    oid: String!
  }

  type Book {
    _id: objID!
    title: String!
    author: String
    pages: Int
    price: Float
  }

  type Query {
    books: [Book]
  }
`
