import { DELETE_CATEGORY } from './gql/deleteCategory';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICategory, IProjects } from '../../interfaces';
import {
  createCategoryDto,
  deleteCategoryDto,
  updateCategoryDto,
} from './dto/category.dto';
import { CREATE_CATEGORY } from './gql/createCategoryWithTodo';
import { GET_TODO_LIST } from './gql/getTodoList';
import { UPDATE_CATEGORY } from './gql/updateCategory';
import { Store } from '@ngrx/store';
import { getProjects } from '../../store/actions/category.actions';

@Injectable({
  providedIn: 'root',
})
export class CategoryListService {
  constructor(private readonly apollo: Apollo, private store: Store) {}

  public getTodoList() {
    this.apollo
      .watchQuery<IProjects>({
        query: GET_TODO_LIST,
      })
      .valueChanges.pipe(map(({ data }) => data.projects));
  }

  public createCategory(data: createCategoryDto) {
    return this.apollo
      .mutate<IProjects>({
        mutation: CREATE_CATEGORY,
        variables: { data },
        refetchQueries: [GET_TODO_LIST],
      })
      .pipe(map(({ data }) => data?.projects));
  }

  public updateCategory(
    data: updateCategoryDto
  ): Observable<ICategory[] | undefined> {
    return this.apollo
      .mutate<IProjects>({
        mutation: UPDATE_CATEGORY,
        variables: { data },
        refetchQueries: [GET_TODO_LIST],
      })
      .pipe(map(({ data }) => data?.projects));
  }

  public removeCategories(
    data: deleteCategoryDto
  ): Observable<ICategory[] | undefined> {
    return this.apollo
      .mutate<IProjects>({
        mutation: DELETE_CATEGORY,
        variables: { data },
        refetchQueries: [GET_TODO_LIST],
      })
      .pipe(map(({ data }) => data?.projects));
  }
}
