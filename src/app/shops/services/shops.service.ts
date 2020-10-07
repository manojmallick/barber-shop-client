import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  Shop } from '../models/shop';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShopsService {
  private API_PATH = `${environment.baseUrl}/api/v1/shops`;

  constructor(private http: HttpClient) {}

  getAllShops(): Observable<Shop[]> {
    return this.http
      .get<Shop[]>(this.API_PATH);
  }
}
