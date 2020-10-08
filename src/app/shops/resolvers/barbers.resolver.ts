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
import { areBarbersLoaded } from '../selectors/barbers.selectors';
import { loadBarbers } from '../actions/barbers.actions';
@Injectable()
export class BarbersResolver implements Resolve<Observable<any>> {
  constructor(private store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    console.log("hi")
    return this.store.pipe(
      select(areBarbersLoaded),
      tap((barbersLoaded) => {
        console.log(barbersLoaded)
        if (!barbersLoaded) {
          this.store.dispatch(loadBarbers());
        }
      }),
      filter((barbersLoaded) => barbersLoaded),
      first()
    );
  }
}
