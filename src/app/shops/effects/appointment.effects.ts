import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { AppointmentTypes } from '../actions/appointment.actions';
import { AppointmentService } from '../services/appointment.service';

@Injectable()
export class AppointmentEffects {
  createAppointment$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AppointmentTypes.createAppointment),
        concatMap((action) =>
          this.appointmentService.createAppointment(action.appointment)
        ),
        tap((action) => {
         this.router.navigateByUrl(`${this.router.url}/${action.id}`)
        }),
        catchError((error) =>
          of(AppointmentTypes.createAppointmentFailed({ error }))
        )
      ),
    { dispatch: false }
  );

  appointmentLoaded$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppointmentTypes.loadAppointment),
      concatMap((action) =>
        this.appointmentService.getAppointment(action.appointmentId)
      ),
      map((appointment) => AppointmentTypes.appointmentLoaded({ appointment })),
      catchError((error) =>
        of(AppointmentTypes.appointmentLoadFailed({ error }))
      )
    );
  });

  constructor(
    private appointmentService: AppointmentService,
    private actions$: Actions,
    private router: Router,
    private route: ActivatedRoute
  ) {}
}
