import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { OfferStoreModule } from './offer-store';
import { AuthStoreModule } from './auth-store';



@NgModule({
  declarations: [],
  imports: [
    CommonModule ,
    OfferStoreModule,
    AuthStoreModule
  ]
})
export class CoreModule { }
