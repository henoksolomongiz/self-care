import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  login(action: User): Observable<any> {
    throw new Error('Method not implemented.');
  }
  logout(): Observable<any> {
    throw new Error('Method not implemented.');
  }
  offer(): Observable<any> {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
