
 
  import { of } from 'rxjs';
  import { Injectable } from '@angular/core';
  import { Actions, createEffect, ofType } from '@ngrx/effects';
  import { catchError, concatMap, map, switchMap, mergeMap } from 'rxjs/operators';

  import * as offerActions from './actions'; 
import { DataService } from 'src/app/shared/service/data.service';
import { NotificationService } from 'src/app/shared/service/notification.service';

  @Injectable()
  export class OfferStoreEffects {
  constructor(
    private dataService: DataService,
    private actions$: Actions,  
    private dialogService: NotificationService
  ) { }

  loadRequestEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(offerActions.load),
      concatMap(() =>
        this.dataService.offer()
          .pipe(
            map(items =>
              offerActions.loadSuccess({
                offers: items
              })
            ),
            catchError(error => of(offerActions.actionFailure({ error })))
          )
      )
    )
  );

   
   
 

  actionFailureEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(offerActions.actionFailure),
      map((action: any) => {
            return this.dialogService.error(  'Error Occurs!');
       
      })
    ),
    { dispatch: false }
  );

  refreshEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(offerActions.refresh),
      map(_ => offerActions.load())
    )
  );
}
