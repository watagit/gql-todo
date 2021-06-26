import { ApolloServer } from 'apollo-server';
import fs from 'fs';
import path from 'path';

type Todo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

let todos: Todo[] = [{
  id: 'todo-0',
  title: 'clean up my room',
  isCompleted: false,
}];

let idCount = todos.length;
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    todos: () => todos,
  },
  Mutation: {
    postTodo: (parent: any, args: any) => {
      const todo = {
        id: `todo-${idCount}`,
        title: args.title,
        isCompleted: false,
      } as Todo
      todos.push(todo);
      return todo;
    },
  },
  Todo: {
    id: (parent: any) => parent.id,
    title: (parent: any) => parent.title,
    isCompleted: (parent: any) => parent.isCompleted,
  }
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8',
  ),
  resolvers,
});

server
  .listen()
  .then(({ url }: any) => {
    console.log(`Server is running on ${url}`);
  });
