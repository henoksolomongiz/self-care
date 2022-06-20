
import { createFeatureSelector, createSelector } from '@ngrx/store'; 
import { Offer } from 'src/app/models/offer.model';
import { offerAdapter, State } from './state';

export const selectOfferState = createFeatureSelector<State>('offer');

export const selectAllOfferItems: (
    state: object
) => Offer[] = offerAdapter.getSelectors(selectOfferState).selectAll;
 
