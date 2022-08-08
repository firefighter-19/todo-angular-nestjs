import { ITodo } from '../../../interfaces';

export interface addTodoDto {
  categoryId: string;
  text: string;
}

export interface updateTodoDto {
  categoryId: string;
  todo: ITodo;
}

export interface deleteTodoDto {
  categoryId: string;
  todoId: string;
}
