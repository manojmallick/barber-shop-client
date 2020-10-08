import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, concatMap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AvailabilitiesTypes as AvailabilitiesTypes } from '../actions/availabilities.actions';
import { AvailabilitiesService } from '../services/availabilities.service';

@Injectable()
export class AvailabilitiesEffects {
  availabilitiesLoaded$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AvailabilitiesTypes.loadAvailabilities),
      concatMap((action) => 
         this.availabilitiesService.getAvailabilities(action.startDate,action.endDate,action.shopId)
      ),
      map(Availabilities => {
        return AvailabilitiesTypes.availabilitiesLoaded({Availabilities})
      }),
      catchError((error) =>
        of(AvailabilitiesTypes.availabilitiesLoadFailed({ error })),
      ) ,
    )
  });

  constructor(
    private availabilitiesService: AvailabilitiesService,
    private actions$: Actions  ) {}
}
