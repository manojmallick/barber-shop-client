import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, concatMap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { BarberActionTypes } from '../actions/barbers.actions';
import { BarbersService } from '../services/barbers.service';

@Injectable()
export class BarbersEffects {

  barbersLoaded$ = createEffect(() =>{
    return this.actions$.pipe(
      ofType(BarberActionTypes.loadBarbers),
     concatMap(() => this.barberService.getAllBarbers()),
     map(barbers => BarberActionTypes.barbersLoaded({barbers})),
     catchError(error=>of(BarberActionTypes.barbersLoadFailed({error}))),
    )
  }
  );

  constructor(private barberService: BarbersService, private actions$: Actions) {}
}