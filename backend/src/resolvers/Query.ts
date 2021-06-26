const todos = (parent: any, args: any, context: any, info: any) => {
  return context.prisma.todo.findMany();
};

module.exports = {
  todos,
};
