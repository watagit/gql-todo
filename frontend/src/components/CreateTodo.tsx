import React, { VFC, useState, useCallback, ChangeEvent } from 'react';
import { useMutation, gql } from '@apollo/client';

const CREATE_TODO_MUTATION = gql`
  mutation PostMutation(
    $title: String!
  ) {
    postTodo(title: $title) {
      id
      title
      isCompleted
    }
  }
`;

const CreateTodo: VFC = () => {
  const [title, setTitle] = useState<string>('');
  const [createTodo] = useMutation(CREATE_TODO_MUTATION, {
    variables: {
      title: title,
    },
  });

  const inputTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, [setTitle]);

  const handleSubmit = () => {
    createTodo();
  }

  return (
    <form>
      <input
        value={title}
        onChange={inputTitle}
        type='text'
        placeholder='type title'
      />
      <button type='submit' onClick={handleSubmit}>Submit</button>
    </form>
  )
};

export default CreateTodo;
