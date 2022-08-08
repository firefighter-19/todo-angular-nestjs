import { gql } from 'apollo-angular';

export const ADD_TODO = gql`
  mutation addTodo($data: AddTodoInput!) {
    addTodo(todoData: $data) {
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
