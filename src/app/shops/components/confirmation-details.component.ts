import {
  Component,
  OnDestroy,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Appointment } from '../models';

@Component({
  selector: 'bs-confirmation-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './confirmation-details.component.html',
  styleUrls: ['./confirmation-details.component.scss'],
})
export class ConfirmationDetailsComponent implements OnDestroy {
  @Input() appointment: Appointment;

  constructor() {}

  get id() {
    return this.appointment?.id;
  }
  get bookingDate() {
    return this.appointment?.bookingDate;
  }
  get bookingTime() {
    return this.appointment?.startTime;
  }

  get customerName() {
    return this.appointment?.customer?.name;
  }
  get customerEmail() {
    return this.appointment?.customer?.email;
  }
  get customerMobile() {
    return this.appointment?.customer?.mobile;
  }
  get customerGender() {
    return this.appointment?.customer?.gender;
  }
  get barberName() {
    return this.appointment?.barber?.name;
  }

  get barberaAvatar() {
    return this.appointment?.barber?.avatar;
  }

  ngOnDestroy(): void {}
}
