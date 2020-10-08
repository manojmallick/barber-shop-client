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
import { areAvailabilitiesLoaded } from '../selectors/availabilities.selectors';
import { loadAvailabilities } from '../actions/availabilities.actions';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';
import { DATE_FORMAT } from '../models';
@Injectable()
export class AvailabilitiesResolver implements Resolve<Observable<any>> {
  constructor(private store: Store<AppState>) {}
  dateformat: DatePipe = new DatePipe(
    navigator.language || navigator['userLanguage']
  );

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      select(areAvailabilitiesLoaded),
      tap((availabilitiesLoaded) => {
        if (!availabilitiesLoaded) {
          const now = new Date();
          let startDate = this.dateformat.transform(now, DATE_FORMAT);
          let endDate = this.dateformat.transform(
            now.setDate(now.getDate() + environment.maxDays),
            DATE_FORMAT
          );
          this.store.dispatch(
            loadAvailabilities({
              startDate,
              endDate,
              shopId: route.params['shopId'],
            })
          );
        }
      }),
      filter((availabilitiesLoaded) => availabilitiesLoaded),
      first()
    );
  }
}
