export interface DeleteTodoDto {
  categoryId: string;
  todoId: string;
}

export interface addTodoDto {
  categoryId: string;
  text: string;
}

export interface updateTodoDto {
  categoryId: string;
  todo: Todo;
}

export interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
}
