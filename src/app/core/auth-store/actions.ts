import { createAction, props } from '@ngrx/store';

export const authLogin = createAction('[Auth] Login', props<{ username: string | null | undefined, password: string | null | undefined  }>());
export const authLogout = createAction('[Auth] Logout');
