import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone'
import db from './db.js';
import { typedefs } from './schema.js';
import { resolvers } from './resolvers.js';

const server = new ApolloServer({

    typeDefs:typedefs,
    resolvers:resolvers
});

const {url} = await startStandaloneServer(server,{
    listen:{port:4000}

})

console.log("Server ready at 4000");