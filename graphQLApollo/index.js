import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
import { typeDefs } from './schema/schema.js';
import { GraphQLError } from 'graphql';

// data
import db from './data/_db.js'

//resolvers
const resolvers = {
  Query: {
    books() {
      return db.books
    },
    authors() {
      return db.authors
    },
    addressAuthor(parent, args, context) {
      let returnAddress = {}
      for (let k = 0; k < db.authors.length; k++) {
        if (db.authors[k].name === args.name) {
          for (let i = 0; i < db.address.length; i++) {
            if (db.address[i].id === db.authors[k].address) {
              returnAddress = db.address[i]
            }
          }
        }
      }
      if (returnAddress) return returnAddress
    },
    booksAndAuthors() {
      let booksAndAuthorsArray = []
      for (let i = 0; i < db.books.length; i++) {
        for (let j = 0; j < db.authors.length; j++) {
          if (db.books[i].author === db.authors[j].id) {
            booksAndAuthorsArray.push({ title: db.books[i].title, authorName: db.authors[j].name })
          }
        }
      }
      return booksAndAuthorsArray
    },
    booksByAuthor(parent, args, context) {
      const authorsID = db.authors.find(a => {
        if (a.name === args.name) {
          return a
        }
      })
      const booksByAuthor = db.books.filter(b => {
        return b.author === authorsID.id
      })
      return booksByAuthor
    },
    book(parent, args, context) {
      //console.log(parent, "\n", context)
      let result = db.books.find((b) => {
        return b.id === args.id
      })

      if (result) {
        return result
      } else {
        throw new GraphQLError('NOT FOUND', {
          extensions: {
            code: 'BAD_REQUEST',
            argumentName: 'id',
          },
        });
      }
    }
  }
}

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at: ${url}`);
