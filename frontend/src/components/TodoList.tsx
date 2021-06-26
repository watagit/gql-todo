import React, { VFC } from 'react';
import { useQuery, gql } from '@apollo/client';

import { TodoType } from '../types/Todo';
import Todo from './Todo';

const TODO_QUERY = gql`
  {
    todos {
      id
      title
      isCompleted
    }
  }
`;

const TodoList: VFC = () => {
  const { data } = useQuery(TODO_QUERY);

  return (
    <>
      {data && (
        <>
          {data.todos.map((todo: TodoType) => (
            <Todo key={todo.id} id={todo.id} title={todo.title} isCompleted={todo.isCompleted} />
          ))}
        </>
      )}
    </>
  );
};

export default TodoList;
