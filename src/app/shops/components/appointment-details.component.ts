import {
  Component,
  OnDestroy,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { FormBuilder, NgModel, Validators } from '@angular/forms';
import {
  NgbCalendar,
  NgbDate,
  NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';
import {
  Appointment,
  Availability,
  Barber,
  Customer,
  DATE_FORMAT,
  Shop,
} from '../models';
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
  @Input() barbers: Barber[];
  availability: Availability;
  barberAvailability: String[];
  model: NgbDateStruct;
  modelBarber: NgModel;
  barber: Barber;
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
      this.shopId = params['shopId']; // (+) converts string 'id' to a number
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
      barber: ['', Validators.nullValidator],
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
    console.log('3');
  }

  formatDate(date: NgbDate | NgbDateStruct): string {
    if (!date) {
      return null;
    }
    const now = new Date(date.year, date.month - 1, date.day);
    return this.dateformat.transform(now, DATE_FORMAT);
  }

  ngOnChanges() {
    this.mapAvailability(this.model);
  }

  onChangeBarber(barber: Barber) {
    this.mapAvailability(this.model);
  }

  private mapAvailability(date: NgbDate | NgbDateStruct) {
    this.availability = this.availabilities?.filter(
      (p) => p.id == this.formatDate(date)
    )[0];
    if (this.modelBarber) {
      this.barberAvailability = this.availability.barberTimeSlot[
        this.modelBarber['id']
      ];
    } else {
      this.barberAvailability = null;
    }
  }

  get id() {
    return this.availability?.id;
  }
  get timeSlot() {
    return this.barberAvailability ?? this.availability?.timeSlot;
  }

  get barberAvatar() {
    return this.modelBarber['avatar'];
  }
  get barberExperience() {
    return this.modelBarber['experience'];
  }

  saveAppointment() {
    if (this.userForm.dirty && this.userForm.valid) {
      const customer: Customer = this.buildCustomer();
      const shop: Shop = this.mapShop();
      const barber: Barber = this.mapBarber();

      const appointment: Appointment = this.buildAppointment(
        customer,
        shop,
        barber
      );
      this.store.dispatch(createAppointment({ appointment }));
    }
  }
  mapBarber(): Barber {
    return {
      id: this.modelBarber['id'] ?? '',
    };
  }
  private mapShop(): Shop {
    return {
      id: this.shopId,
    };
  }

  private buildAppointment(
    customer: Customer,
    shop: Shop,
    barber: Barber
  ): Appointment {
    return {
      startTime: this.userForm.value.timeSlot,
      bookingDate: this.formatDate(this.userForm.value.calender),
      barber,
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
