import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppState } from 'src/app/core/reducers';
import { Appointment, Shop } from '../models';
import { getAllAppointment } from '../selectors/appointment.selectors';
import { getAllAvailabilities } from '../selectors/availabilities.selectors';
import { getAllShops } from '../selectors/shop.selectors';

@Component({
  selector: 'bs-confirmation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
      <div>
      <bs-confirmation-detail
        *ngFor="let appointment of appointment$ | async"
        [appointment]="appointment"
      ></bs-confirmation-detail>
    </div>

  `,
})
export class ConfirmationComponent implements OnDestroy {
  appointment$: Observable<Appointment[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.appointment$ = this.store.select(getAllAppointment);
  }

  ngOnDestroy() {}
}
