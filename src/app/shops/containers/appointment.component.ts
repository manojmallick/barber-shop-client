import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { NotFoundPageComponent } from 'src/app/core/containers/not-found-page.component';
import { AppState } from 'src/app/core/reducers';
import { AppointmentTypes } from '../actions/appointment.actions';
import { Availability } from '../models';
import { getAllAvailabilities } from '../selectors/availabilities.selectors';

@Component({
  selector: 'bs-appointment',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
})
export class AppointmentComponent implements OnDestroy {
  availabilities$: Observable<Availability[] | HttpErrorResponse>;

  error$: BehaviorSubject<string>;

  constructor(private store: Store<AppState>, private toasts: ToastrService,
    private router: Router) {
    this.error$ = new BehaviorSubject<string>('');
  }

  ngOnInit() {
    this.availabilities$ = this.store.select(getAllAvailabilities);
    this.mapErrorMessage();
  }

  private mapErrorMessage() {
    this.availabilities$.subscribe((error) => {
      if (error && error[0]['error']) {
        this.toasts.error(error[0]['error']['errors'][0]);
        this.redirectToNotFound(error);
      }
    });
  }

  private redirectToNotFound(error: Availability[] | HttpErrorResponse) {
    if (error[0]['error']?.status == 404) {
      this.router.navigateByUrl('/not-found');
    }
  }

  ngOnDestroy() {}
}
