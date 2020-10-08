import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../models';
import { environment } from 'src/environments/environment';

export const headers = new Headers({
  'content-Type': 'application/json',
});
@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private API_PATH = `${environment.baseUrl}/api/v1/appointments`;

  constructor(private http: HttpClient) {}

  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(this.API_PATH, appointment, {});
  }

  getAppointment(
    id: string
  ): Observable<Appointment> {
    return this.http.get<Appointment>(
      `${this.API_PATH}/${id}`
    );
  }

}
