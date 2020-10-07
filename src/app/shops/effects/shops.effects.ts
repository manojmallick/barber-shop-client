import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ShopActionTypes } from '../actions/shops.actions';
import { ShopsService } from '../services/shops.service';
import { asyncScheduler, EMPTY as empty, Observable, of } from 'rxjs';

@Injectable()
export class ShopsEffects {

  shopsLoaded$ = createEffect(() =>{
    return this.actions$.pipe(
      ofType(ShopActionTypes.loadShops),
      concatMap(() => this.shopService.getAllShops()),
      map(shops => ShopActionTypes.shopsLoaded({shops})),
      catchError(error=>of(ShopActionTypes.shopsLoadFailed({error})))
    )
  }
  );

  constructor(private shopService: ShopsService, private actions$: Actions, private router: Router) {}
}