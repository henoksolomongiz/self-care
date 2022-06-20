
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducer';
import { OfferStoreEffects } from './effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('offer', reducer),
    EffectsModule.forFeature([OfferStoreEffects])
  ]
})
export class OfferStoreModule { }
