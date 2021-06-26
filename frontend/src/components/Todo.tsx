import React, { VFC } from 'react';
import { TodoType } from '../types/Todo';

const Todo: VFC<TodoType> = ({ id, title, isCompleted }) => {
  return (
    <>
      <p>ID: {id}</p>
      <p>title: {title}</p>
      <p>isCompleted: {String(isCompleted)}</p>
    </>
  );
};

export default Todo;
