import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server';
import fs from 'fs';
import { argsToArgsConfig } from 'graphql/type/definition';
import path from 'path';
import { Todo } from './types';

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    todos: async (parent: any, args: any, context: any) => {
      return context.prisma.todo.findMany();
    },
  },
  Mutation: {
    postTodo: (parent: any, args: any, context: any) => {
      const newTodo = context.prisma.todo.create({
        data: {
          title: args.title,
          isCompleted: false,
        } as Todo,
      });
      return newTodo;
    },
  },
  Todo: {
    id: (parent: any) => parent.id,
    title: (parent: any) => parent.title,
    isCompleted: (parent: any) => parent.isCompleted,
  }
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
