import { authLogin, authLogout } from './actions';
import { createReducer, on, Action } from '@ngrx/store';
import { Auth } from 'src/app/models/auth.model';

export const initialState: Auth = {
  isAuthenticated: false,
  user: null,
};

const reducer = createReducer(
  initialState,
  on(authLogin, (state) => ({ ...state, isAuthenticated: true })),
  on(authLogout, (state) => ({ ...state, isAuthenticated: false }))
);

export function authReducer(state: Auth | undefined, action: Action): Auth {
  return reducer(state, action);
}
