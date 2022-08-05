import { Todo } from '../../todo/dto/todo.dto';

export interface CreateCategoryDto {
  title: string;
  text: string[];
}

export interface UpdateCategoryDto {
  categories: CategoryDto[];
}

export interface CategoryDto {
  id: string;
  title: string;
  todo?: Todo[];
}

export interface DeleteCategoryDto {
  id: string[];
}
