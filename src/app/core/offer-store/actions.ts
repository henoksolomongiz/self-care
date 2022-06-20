import { createAction, props } from '@ngrx/store';
import { Offer } from 'src/app/models/offer.model';

export enum OfferActionType {
  Load = '[Offer Component] Load',

  ActionFailure = '[Offer API] Execute action failure',
  ActionSuccess = '[Offer API] Execute action success',
  LoadSuccess = '[Offer API] Load Success',
  Refresh = '[Offer Page] Refresh',
  SubmitSuccess = '[Offer API] Submit Success',
}

export const load = createAction(OfferActionType.Load); 

export const actionFailure = createAction(
  OfferActionType.ActionFailure,
  props<{ error: string }>()
);

export const actionSuccess = createAction(
  OfferActionType.ActionSuccess,
  props<{ msg: string }>()
);

export const loadSuccess = createAction(
  OfferActionType.LoadSuccess,
  props<{ offers: Offer[] }>()
);

export const submitSuccess = createAction(
  OfferActionType.SubmitSuccess,
  props<{ msg: string }>()
);

export const refresh = createAction(OfferActionType.Refresh);
