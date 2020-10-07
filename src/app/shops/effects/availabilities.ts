import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { asyncScheduler, EMPTY as empty, Observable, of } from 'rxjs';
import { AvailabilitiesTypes as AvailabilitiesTypes } from '../actions/availabilities.actions';
import { AvailabilitiesService } from '../services/availabilities';

@Injectable()
export class AvailabilitiesEffects {
  availabilitiesLoaded$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AvailabilitiesTypes.loadAvailabilities),
      concatMap((action) => 
         this.availabilitiesService.getAllShops(action.startDate,action.endDate,action.shopId)
      ),
      map(Availabilities => AvailabilitiesTypes.availabilitiesLoaded({Availabilities})),
      catchError((error) =>
        of(AvailabilitiesTypes.availabilitiesLoadFailed({ error })),
      ) ,
      //tap((action) => { console.log(action);this.router.navigateByUrl('/courses')})
    )
  });

  constructor(
    private availabilitiesService: AvailabilitiesService,
    private actions$: Actions,
    private router: Router
  ) {}
}
