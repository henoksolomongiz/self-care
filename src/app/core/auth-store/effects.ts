import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { DataService } from 'src/app/shared/service/data.service';
import { LocalStorageService } from 'src/app/shared/service/local-storage.service';
 
import { authLogin, authLogout } from './actions';

export const AUTH_KEY = 'AUTH';

@Injectable()
export class AuthEffects {
  login = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authLogin),
        tap((res) =>
        {
          this.dataService.login({userName: res.username, password: res.password}).subscribe( (res)=>{
            this.localStorageService.setItem(AUTH_KEY, res.authToken);
            this.router.navigateByUrl("home");
             
          })
         }
        )
      ),
    { dispatch: false }
  );

  logout = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authLogout),
        tap(() => {
          this.router.navigate(['']);
          this.localStorageService.setItem(AUTH_KEY,null );
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService,
    private router: Router, private dataService: DataService
  ) {}
}
