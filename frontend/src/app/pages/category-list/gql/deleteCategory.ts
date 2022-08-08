import { gql } from 'apollo-angular';

export const DELETE_CATEGORY = gql`
  mutation deleteCategory($data: DeleteCategoryInput!) {
    deleteCategory(todoData: $data) {
      id
    }
  }
`;
