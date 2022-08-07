import { DELETE_TODO } from './gql/deleteTodo';
import { DELETE_CATEGORY } from './gql/deleteCategory';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICategory, IProjects } from '../../interfaces';
import {
  addTodoDto,
  CreateCategoryDto,
  DeleteCategoryDto,
  DeleteTodoDto,
  UpdateCategoryDto,
} from './dto/category.dto';
import { ADD_TODO } from './gql/addTodo';
import { CREATE_CATEGORY } from './gql/createCategoryWithTodo';
import { GET_TODO_LIST } from './gql/getTodoList';
import { UPDATE_CATEGORY } from './gql/updateCategory';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  constructor(private readonly apollo: Apollo) {}

  public getTodoList(): Observable<IProjects> {
    return this.apollo
      .watchQuery<IProjects>({
        query: GET_TODO_LIST,
      })
      .valueChanges.pipe(
        map(({ data, loading }) => ({ projects: data.projects, loading }))
      );
  }

  public createCategory(
    data: CreateCategoryDto
  ): Observable<ICategory[] | undefined> {
    return this.apollo
      .mutate<IProjects>({
        mutation: CREATE_CATEGORY,
        variables: data,
        refetchQueries: [GET_TODO_LIST],
      })
      .pipe(map(({ data }) => data?.projects));
  }

  public updateCategory(
    data: UpdateCategoryDto
  ): Observable<ICategory[] | undefined> {
    return this.apollo
      .mutate<IProjects>({
        mutation: UPDATE_CATEGORY,
        variables: data,
        refetchQueries: [GET_TODO_LIST],
      })
      .pipe(map(({ data }) => data?.projects));
  }

  public addTodo(data: addTodoDto): Observable<ICategory[] | undefined> {
    return this.apollo
      .mutate<IProjects>({
        mutation: ADD_TODO,
        variables: data,
        refetchQueries: [GET_TODO_LIST],
      })
      .pipe(map(({ data }) => data?.projects));
  }

  public removeCategories(
    data: DeleteCategoryDto
  ): Observable<ICategory[] | undefined> {
    return this.apollo
      .mutate<IProjects>({
        mutation: DELETE_CATEGORY,
        variables: data,
        refetchQueries: [GET_TODO_LIST],
      })
      .pipe(map(({ data }) => data?.projects));
  }

  public removeTodo(data: DeleteTodoDto): Observable<ICategory[] | undefined> {
    return this.apollo
      .mutate<IProjects>({
        mutation: DELETE_TODO,
        variables: data,
        refetchQueries: [GET_TODO_LIST],
      })
      .pipe(map(({ data }) => data?.projects));
  }
}
