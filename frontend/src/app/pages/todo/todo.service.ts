import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, map } from 'rxjs';
import { ICategory, IProjects } from '../../interfaces';
import { ADD_TODO } from '../category/gql/addTodo';
import { DELETE_TODO } from '../category/gql/deleteTodo';
import { GET_TODO_LIST } from '../category-list/gql/getTodoList';
import {
  addTodoDto,
  deleteTodoDto,
  updateTodoDto,
} from '../category/dto/todo.dto';
import { UPDATE_TODO } from '../category/gql/updateTodo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private readonly apollo: Apollo) {}

  public addTodo(data: addTodoDto) {
    return this.apollo
      .mutate<IProjects>({
        mutation: ADD_TODO,
        variables: { data },
        refetchQueries: [GET_TODO_LIST],
      })
      .subscribe();
  }

  public updateTodo(data: updateTodoDto) {
    return this.apollo
      .mutate<IProjects>({
        mutation: UPDATE_TODO,
        variables: { data },
        refetchQueries: [GET_TODO_LIST],
      })
      .subscribe();
  }

  public removeTodo(data: deleteTodoDto) {
    return this.apollo
      .mutate<IProjects>({
        mutation: DELETE_TODO,
        variables: { data },
        refetchQueries: [GET_TODO_LIST],
      })
      .subscribe();
  }
}
