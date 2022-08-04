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

export interface DeleteTodoDto {
  todoId: string[];
}

interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
}
