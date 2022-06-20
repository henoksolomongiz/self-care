import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRespose, User } from 'src/app/models/auth.model';
import { Offer } from 'src/app/models/offer.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  login(user: User): Observable<LoginRespose> {
    return this.http.post<LoginRespose>(environment.serverUrl + 'login',user);
  }
  logout(): Observable<any> {
    return this.http.get<any>(environment.serverUrl + 'logout');
  }
  offer(): Observable<Offer[]> {
    return this.http.get<Offer[]>(environment.serverUrl + 'offers');
  }
  subscription(offerId: Number): Observable<any> {
    return this.http.get<any>(environment.serverUrl + `offers/${offerId}/subscriptions`);
  }

  constructor(private http: HttpClient) {}
}
