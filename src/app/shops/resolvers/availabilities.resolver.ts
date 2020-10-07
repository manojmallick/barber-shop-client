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
import { areAvailabilitiesLoaded } from '../selectors/availabilities';
import { loadAvailabilities } from '../actions/availabilities.actions';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
@Injectable()
export class AvailabilitiesResolver implements Resolve<Observable<any>> {
  constructor(private store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    console.log('availabilitiesLoaded');
    return this.store.pipe(
      select(areAvailabilitiesLoaded),
      tap((availabilitiesLoaded) => {
        if (!availabilitiesLoaded) {
          this.store.dispatch(
            loadAvailabilities({
              startDate: '2020-10-07',
              endDate: '2020-12-31',
              shopId: route.params['id'],
            })
          );
        }
      }),
      filter((availabilitiesLoaded) => availabilitiesLoaded),
      first()
    );
  }
}
