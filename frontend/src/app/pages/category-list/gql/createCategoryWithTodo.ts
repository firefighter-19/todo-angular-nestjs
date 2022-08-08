import { gql } from 'apollo-angular';

export const CREATE_CATEGORY = gql`
  mutation createTodo($data: CreateCategoryInput!) {
    createCategory(todoData: $data) {
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
