import { TodoType } from '../types';

const postTodo = async (parent: any, args: any, context: any, info: any) => {
  return await context.prisma.todo.create({
    data: {
      title: args.title,
      isCompleted: false,
    } as TodoType,
  });
};

module.exports = {
  postTodo,
};
