import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Auth } from 'src/app/models/auth.model';

export const authAdapter: EntityAdapter<Auth> = createEntityAdapter<Auth>({});
export interface State extends EntityState<Auth> {
  isAuthenticated: boolean;
}

export const initialState: State = authAdapter.getInitialState({
  isAuthenticated: false,
});
