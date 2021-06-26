import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  const newTodo = await prisma.todo.create({
    data: {
      title: "first todo",
      isCompleted: false,
    },
  });
  const allTodos = await prisma.todo.findMany();
  console.log(allTodos);
};

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
