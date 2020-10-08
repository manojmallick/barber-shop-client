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

@Component({
  selector: 'bs-appointment-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.scss'],
})
export class AppointmentDetailsComponent implements OnDestroy {
  @Input() availabilities: Availability[];
  availability: Availability;
  model: NgbDateStruct;
  displayMonths = 1;
  navigation = 'Without select boxes';
  showWeekNumbers = false;
  outsideDays = 'Hidden outside days';
  minDate: NgbDate | null = null;
  maxDate: NgbDate | null = null;
  userForm: any;
  dateformat: DatePipe;
  private sub: any;
  private shopId: string;

  constructor(
    calendar: NgbCalendar,
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) {
    this.sub = this.route.params.subscribe((params) => {
      this.shopId = params['id']; // (+) converts string 'id' to a number
    });
    this.dateformat = new DatePipe(
      navigator.language || navigator['userLanguage']
    );
    this.model = calendar.getToday();
    this.minDate = calendar.getToday();
    this.maxDate = calendar.getNext(
      calendar.getToday(),
      'd',
      environment.maxDays
    );
    this.userForm = this.formBuilder.group({
      calender: ['', Validators.nullValidator],
      timeSlot: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, ValidationService.emailValidator]],
      mobile: [
        '',
        [Validators.required, ValidationService.mobileNumberValidator],
      ],
      gender: ['', [Validators.required]],
    });
  }

  onDateSelect(date: NgbDate) {
    this.mapAvailability(date);
  }

  formatDate(date: NgbDate | NgbDateStruct): string {
    if (!date) {
      return null;
    }
    const now = new Date(date.year, date.month - 1, date.day);
    return this.dateformat.transform(now, 'yyyy-MM-dd');
  }

  ngOnChanges() {
    this.mapAvailability(this.model);
  }

  private mapAvailability(date: NgbDate | NgbDateStruct) {
    this.availability = this.availabilities?.filter(
      (p) => p.id == this.formatDate(date)
    )[0];
  }

  get id() {
    return this.availability?.id;
  }
  get timeSlot() {
    return this.availability?.timeSlot;
  }

  saveAppointment() {
    if (this.userForm.dirty && this.userForm.valid) {
      const customer: Customer = this.buildCustomer();
      const shop: Shop = this.mapShop();

      const appointment: Appointment = this.buildAppointment(customer, shop);
      this.store.dispatch(createAppointment({ appointment }));
    }
  }
  private mapShop(): Shop {
    return {
      id: this.shopId,
    };
  }

  private buildAppointment(customer: Customer, shop: Shop): Appointment {
    return {
      startTime: this.userForm.value.timeSlot,
      bookingDate: this.formatDate(this.userForm.value.calender),
      customer,
      shop,
    };
  }

  private buildCustomer(): Customer {
    return {
      name: this.userForm.value.name,
      gender: this.userForm.value.gender,
      email: this.userForm.value.email,
      mobile: this.userForm.value.mobile,
    };
  }

  ngOnDestroy(): void {}
}
