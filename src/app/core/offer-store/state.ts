
 
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Offer } from 'src/app/models/offer.model';

export const offerAdapter: EntityAdapter<Offer> = createEntityAdapter<Offer>({
  selectId: model => model.id.toString()
});
export interface State extends EntityState<Offer> {
 offers: Offer[]
}

export const initialState: State = offerAdapter.getInitialState({
  offers:[]
});
