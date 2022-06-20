import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  storageKey = 'SELF-CARE-';
  setItem(key: string, value: any) {
    localStorage.setItem(this.storageKey + key, value);
  }
  getItem(key: string): any {
    return localStorage.getItem(this.storageKey + key);
  }
  constructor() {}
}
