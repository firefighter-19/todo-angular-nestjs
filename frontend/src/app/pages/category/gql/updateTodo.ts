import { gql } from 'apollo-angular';

export const UPDATE_TODO = gql`
  mutation updateTodo($data: UpdateTodoInput!) {
    updateTodo(todoData: $data) {
      id
      title
      todo {
        id
        text
        isCompleted
      }
    }
  }
`;
