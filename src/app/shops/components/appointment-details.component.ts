import {
  Component,
  OnDestroy,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  NgbCalendar,
  NgbDate,
  NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';
import { Availability, Shop } from '../models/shop';
import { ValidationService } from '../validation/validation.service';

@Component({
  selector: 'bs-appointment-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.scss']
})
export class AppointmentDetailsComponent implements OnDestroy {
  @Input() availabilities: Availability[];
  @Input() date: NgbDate;
  availability: Availability;
  model: NgbDateStruct;
  displayMonths = 1;
  navigation = 'Without select boxes';
  showWeekNumbers = false;
  outsideDays = 'Hidden outside days';
  minDate: NgbDate | null = null;
  maxDate: NgbDate | null = null;
  userForm: any;
  orders: { id: string; name: string }[];

  constructor(
    private router: Router,
    calendar: NgbCalendar,
    private formBuilder: FormBuilder
  ) {
    this.model = calendar.getToday();
    this.minDate = calendar.getToday();
    this.maxDate = calendar.getNext(calendar.getToday(), 'd', 90);
    this.userForm = this.formBuilder.group({
      calender: ['', Validators.required],
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
    this.availability = this.availabilities?.filter(
      (p) => p.id == this.formatDate(date)
    )[0];
  }

  formatDate(d: any): string {
    if (!d) {
      return null;
    }

    console.log(d);
    return [
      d.year,
      d.month < 10 ? '0' + d.month : d.month,
      d.day < 10 ? '0' + d.day : d.day,
    ].join('-');
  }

  ngOnChanges() {
    this.availability = this.availabilities?.filter(
      (p) => p.id == this.formatDate(this.model)
    )[0];
  }

  get id() {
    return this.availability?.id;
  }
  get timeSlot() {
    return this.availability?.timeSlot;
  }

  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      console.log(this.userForm.value);
      alert(
        `Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`
      );
    }
  }

  ngOnDestroy() {}
}
