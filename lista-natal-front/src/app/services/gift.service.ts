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

}
