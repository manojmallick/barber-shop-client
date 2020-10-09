import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { filter, first, tap } from 'rxjs/operators';
import { AppState } from '../../core/reducers';
import { areAppointmentLoaded } from '../selectors/appointment.selectors';
import { loadAppointment } from '../actions/appointment.actions';
@Injectable()
export class AppointmentResolver implements Resolve<Observable<any>> {
  constructor(private store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      select(areAppointmentLoaded),
      tap((appointmentLoaded) => {
        if (!appointmentLoaded) {
          this.store.dispatch(
            loadAppointment({
              appointmentId: route.params['appointmentId'],
            })
          );
        }
      }),
      filter((availabilitiesLoaded) => availabilitiesLoaded),
      first()
    );
  }
}
