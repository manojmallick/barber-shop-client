import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { filter, finalize, first, tap } from 'rxjs/operators';
import { AppState } from '../../core/reducers';
import { areShopsLoaded } from '../selectors/entity.selectors';
import { loadShops, shopsLoaded } from '../actions/shops.actions';
@Injectable()
export class ShopResolver implements Resolve<Observable<any>> {
  constructor(private store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      select(areShopsLoaded),
      tap((shopsLoaded) => {
        if (!shopsLoaded) {
          this.store.dispatch(loadShops());
        }
      }),
      filter((shopsLoaded) => shopsLoaded),
      first()
    );
  }
}
