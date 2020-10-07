import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/core/reducers';
import { Availability } from '../models/shop';
import { getAllAvailabilities } from '../selectors/availabilities';
import { ValidationService } from '../validation/validation.service';

@Component({
  selector: 'bs-appointment',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
})
export class AppointmentComponent implements OnDestroy {
  availabilities$: Observable<Availability[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.availabilities$ = this.store.select(getAllAvailabilities);
  }

  ngOnDestroy() {}
}
