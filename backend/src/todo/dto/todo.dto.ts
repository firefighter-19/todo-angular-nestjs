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
