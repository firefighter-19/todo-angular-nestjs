import { Todo } from '../../todo/dto/todo.dto';

export interface CreateCategoryDto {
  title: string;
}

export interface UpdateCategoryDto {
  categoryId: string;
  title: string;
}
export interface DeleteCategoryDto {
  id: string;
}

export interface CategoryDto {
  id: string;
  title: string;
  todo?: Todo[];
}
