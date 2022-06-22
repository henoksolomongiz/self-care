import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { load } from 'src/app/core/offer-store/actions';
import { selectAllOfferItems } from 'src/app/core/offer-store/selectors';
import { State } from 'src/app/core/offer-store/state';
import { Offer } from 'src/app/models/offer.model';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  offers: Offer[] = [];

  constructor(public store: Store<State>) {
    this.store.dispatch(load());
  }

  ngOnInit(): void {
    this.store
      .pipe(select(selectAllOfferItems))
      .subscribe((res) => (this.offers = res));
  }
}
