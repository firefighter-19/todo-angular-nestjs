import { DELETE_CATEGORY } from './gql/deleteCategory';
import { Injectable } from '@angular/core';
import { Apollo, MutationResult } from 'apollo-angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { ICategory, IProjects } from '../../interfaces';
import {
  createCategoryDto,
  deleteCategoryDto,
  updateCategoryDto,
} from './dto/category.dto';
import { CREATE_CATEGORY } from './gql/createCategoryWithTodo';
import { GET_TODO_LIST } from './gql/getTodoList';
import { UPDATE_CATEGORY } from './gql/updateCategory';
import { ApolloQueryResult } from '@apollo/client/core/types';

@Injectable({
  providedIn: 'root',
})
export class CategoryListService {
  private projects = new BehaviorSubject<ICategory[]>([]);
  readonly projects$ = this.projects.asObservable();

  constructor(private readonly apollo: Apollo) {}

  public getTodoList(): Observable<ApolloQueryResult<IProjects>> {
    return this.apollo
      .watchQuery<IProjects>({
        query: GET_TODO_LIST,
      })
      .valueChanges.pipe(
        tap(({ data }) => {
          this.projects.next(data.projects);
        }),
        shareReplay(1)
      );
  }

  public createCategory(
    data: createCategoryDto
  ): Observable<MutationResult<IProjects>> {
    return this.apollo.mutate<IProjects>({
      mutation: CREATE_CATEGORY,
      variables: { data },
      refetchQueries: [GET_TODO_LIST],
    });
  }

  public updateCategory(data: updateCategoryDto): void {
    this.apollo
      .mutate<IProjects>({
        mutation: UPDATE_CATEGORY,
        variables: { data },
        refetchQueries: [GET_TODO_LIST],
      })
      .pipe(
        tap(({ data }) => {
          this.projects.next(data!.projects);
        })
      )
      .subscribe();
  }

  public removeCategories(data: deleteCategoryDto): void {
    this.apollo
      .mutate<IProjects>({
        mutation: DELETE_CATEGORY,
        variables: { data },
        refetchQueries: [GET_TODO_LIST],
      })
      .pipe(
        tap(({ data }) => {
          this.projects.next(data!.projects);
        })
      )
      .subscribe();
  }
}
