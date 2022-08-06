import { gql } from 'apollo-angular';

export const GET_TODO_LIST = gql`
  query getTodoList {
    projects {
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
