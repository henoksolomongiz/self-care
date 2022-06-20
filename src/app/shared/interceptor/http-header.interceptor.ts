import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { selectIsAuthenticated } from 'src/app/core/auth-store/selectors';
import { select, Store } from '@ngrx/store';
import { LocalStorageService } from '../service/local-storage.service';
import { State } from 'src/app/core/auth-store/state';
import { AUTH_KEY } from 'src/app/core/auth-store/effects';

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {

  constructor( private store: Store<State>,
    private localStorageService: LocalStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let isAuthenticated = this.store.pipe(select(selectIsAuthenticated));   

     if (isAuthenticated) {
       let authHeader = `Bearer ${this.localStorageService.getItem(AUTH_KEY)}`;
        request = request.clone({
          setHeaders: {
              Authorization: authHeader
          }
      });
    }

  
    return next.handle(request);
  }
}
