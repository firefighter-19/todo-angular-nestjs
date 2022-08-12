import { IProjects } from './../../interfaces';
import { createReducer, on } from '@ngrx/store';
import { getProjects } from '../actions/category.actions';

export const initialState: IProjects = {
  projects: [],
};

export const categoryReducer = createReducer(
  initialState,
  on(getProjects, (state, payload) => {
    return {
      ...state,
      projects: [...initialState.projects, ...payload.projects],
    };
  })
);
