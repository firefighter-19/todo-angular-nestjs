import { gql } from 'apollo-angular';

export const UPDATE_CATEGORY = gql`
  mutation updateCategory($data: UpdateCategoryInput!) {
    updateCategory(todoData: $data) {
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
