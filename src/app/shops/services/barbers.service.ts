import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  Barber } from '../models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BarbersService {
  private API_PATH = `${environment.baseUrl}/api/v1/barbers`;

  constructor(private http: HttpClient) {}

  getAllBarbers(): Observable<Barber[]> {
    return this.http
      .get<Barber[]>(this.API_PATH);
  }
}
