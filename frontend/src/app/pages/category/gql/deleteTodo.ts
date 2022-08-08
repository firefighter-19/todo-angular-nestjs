import { gql } from 'apollo-angular';

export const DELETE_TODO = gql`
  mutation deleteTodo($data: DeleteTodoInput!) {
    deleteTodo(todoData: $data) {
      id
    }
  }
`;
