import { Action, createReducer, on } from '@ngrx/store';
import * as offerActions from './actions';
import { offerAdapter, initialState, State } from './state';

const featureReducer = createReducer(
  initialState,
  on(offerActions.load, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),

  on(offerActions.loadSuccess, (state, { offers }) => {
  
    return offerAdapter.addMany(offers, {
      ...state,
      offers: offers,
      error: null,
    });
  }),
  on(offerActions.actionFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return featureReducer(state, action);
}
