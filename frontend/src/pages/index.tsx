import { NextPage } from 'next';
import TodoList from '../components/TodoList';
import CreateTodo from '../components/CreateTodo';

const TopPage: NextPage = () => {
  return (
    <>
      <CreateTodo />
      <TodoList />
    </>
  );
};

export default TopPage;
