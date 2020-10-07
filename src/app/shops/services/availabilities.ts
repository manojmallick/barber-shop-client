import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Availability } from '../models/shop';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AvailabilitiesService {
  private API_PATH = `${environment.baseUrl}/api/v1/availabilities`;

  constructor(private http: HttpClient) {}

  getAllShops(
    bookingDate: string,
    endDate: string,
    shopId: string
  ): Observable<Availability[]> {
    return this.http.get<Availability[]>(
      `${this.API_PATH}?bookingDate=${bookingDate}&endDate=${endDate}&shopId=${shopId}`
    );
  }
}
