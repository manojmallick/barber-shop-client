import {
  Component,
  OnDestroy,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  NgbCalendar,
  NgbDate,
  NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';
import { Appointment, Availability, Customer, Shop } from '../models';
import { ValidationService } from '../validation/validation.service';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';
import { AppState } from 'src/app/core/reducers';
import { Store } from '@ngrx/store';
import { createAppointment } from '../actions/appointment.actions';
import { ActivatedRoute } from '@angular/router';
import { AppointmentResolver } from '../resolvers/appointment.resolver';

@Component({
  selector: 'bs-confirmation-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './confirmation-details.component.html',
  styleUrls: ['./confirmation-details.component.scss'],
})
export class ConfirmationDetailsComponent implements OnDestroy {
  @Input() appointment: Appointment;

  constructor(
  ) {
    console.log(this.appointment)
    
  }

  

  get id() {
    return this.appointment?.id;
  }
  get bookingDate() {
    return this.appointment?.bookingDate;
  }



  ngOnDestroy(): void {}
}
