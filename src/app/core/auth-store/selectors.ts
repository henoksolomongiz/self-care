
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authAdapter, State } from './state';

export const selectAuthState = createFeatureSelector<State>('auth');
export const selectAuth = createSelector(
    selectAuthState,
    (state: State) => state
  );
  
  export const selectIsAuthenticated = createSelector(
    selectAuthState,
    (state: State) => state.isAuthenticated
  );