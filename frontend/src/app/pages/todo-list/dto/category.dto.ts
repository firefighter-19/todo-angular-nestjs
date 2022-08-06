import { ITodo } from '../../../interfaces';

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
  todo?: ITodo[];
}

export interface DeleteCategoryDto {
  id: string[];
}

export interface DeleteTodoDto {
  todoId: string[];
}

export interface addTodoDto {
  categoryId: string;
  text: string;
}

export interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
}
