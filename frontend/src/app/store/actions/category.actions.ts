import { ICategory } from './../../interfaces';
import { createAction, props } from '@ngrx/store';

export const getProjects = createAction(
  '[Category Component] getProjects',
  props<{ projects: ICategory[] }>()
);
