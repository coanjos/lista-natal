import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Gift } from '../models/gift';

@Injectable({
  providedIn: 'root'
})
export class GiftService {
  apiUrl = environment.giftApiUrl;

  constructor(private http: HttpClient) { }

  getGifts() {
    return this.http.get<Gift[]>(`${this.apiUrl}/api/gifts`);
  }

  addGift(description: string) {
    return this.http.post(`${this.apiUrl}/api/gifts/`, {description});
  }

  deleteGift(id: number) {
    return this.http.delete(`${this.apiUrl}/api/gifts/${id}`);
  }

  updateGift(id: number, description: string) {
    return this.http.patch(`${this.apiUrl}/api/gifts/${id}`, {description});
  }
}
