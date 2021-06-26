import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server';
import fs from 'fs';
import path from 'path';

const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Todo = require('./resolvers/Todo');

const resolvers = {
  Query,
  Mutation,
  Todo,
};

const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8',
  ),
  resolvers,
  context: {
    prisma,
  },
});

server
  .listen()
  .then(({ url }: any) => {
    console.log(`Server is running on ${url}`);
  });
