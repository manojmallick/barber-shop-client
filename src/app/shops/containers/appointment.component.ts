import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/reducers';
import { Availability } from '../models/shop';
import { getAllAvailabilities as getAllAvailabilities } from '../selectors/availabilities';
import { AvailabilitiesService } from '../services/availabilities';

@Component({
  selector: 'bs-appointment',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="row">
      <ngb-datepicker
        class="calender ml-4"
        [displayMonths]="displayMonths"
        [navigation]="navigation"
        [showWeekNumbers]="showWeekNumbers"
        [outsideDays]="outsideDays"
      >
      </ngb-datepicker>

      <div class="btn-group ml-4 mr-3">
        <div ngbDropdown class="d-inline-block">
          <button
            class="btn btn-outline-primary"
            id="dropdownBasic1"
            ngbDropdownToggle
          >
            Choose Your Time
          </button>
          <div
            ngbDropdownMenu
            aria-labelledby="dropdownBasic1"
            class="scrollable-list"
          >
            <button ngbDropdownItem><span class="h6">9:00</span></button>
            <hr />

            <button ngbDropdownItem><span class="h6">9:30</span></button>
            <hr />

            <button ngbDropdownItem><span class="h6">10:00</span></button>
            <hr />

            <button ngbDropdownItem><span class="h6">10:30</span></button>
            <hr />

            <button ngbDropdownItem><span class="h6">11:00</span></button>
            <hr />

            <button ngbDropdownItem><span class="h6">11:30</span></button>
            <hr />

            <button ngbDropdownItem><span class="h6">12:00</span></button>
            <hr />

            <button ngbDropdownItem><span class="h6">12:30</span></button>
            <hr />

            <button ngbDropdownItem><span class="h6">13:00</span></button>
            <hr />

            <button ngbDropdownItem><span class="h6">13:30</span></button>
            <hr />

            <button ngbDropdownItem><span class="h6">14:00</span></button>
            <hr />

            <button ngbDropdownItem><span class="h6">14:30</span></button>
            <hr />

            <button ngbDropdownItem><span class="h6">15:00</span></button>
            <hr />

            <button ngbDropdownItem><span class="h6">15:30</span></button>
            <hr />

            <button ngbDropdownItem><span class="h6">16:00</span></button>
            <hr />

            <button ngbDropdownItem><span class="h6">16:30</span></button>
          </div>
        </div>
      </div>

      <div class="ml-5 card w-50">
        <p class="text-capitalize font-weight-bold card-header">
          Fill your details
        </p>
        <form class="card-body">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="John Devis"
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="email@example.com"
            />
          </div>
          <div class="form-group">
            <input
              type="tel"
              class="form-control"
              id="exampleDropdownFormPassword1"
              placeholder="06578904321"
            />
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="male"
            />
            <label class="form-check-label" for="male">Male</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="female"
            />
            <label class="form-check-label" for="female">Female</label>
          </div>

          <button type="submit" class="btn btn-primary submit">Submit</button>
        </form>
      </div>
    </div>
  `,
})
export class AppointmentComponent implements OnDestroy {
  displayMonths = 1;
  navigation = 'Without select boxes';
  showWeekNumbers = false;
  outsideDays = 'Hidden outside days';

  availabilities$: Observable<Availability[]>;

  constructor(private store: Store<AppState>) {
    console.log("===>1");
  }

  ngOnInit() {
    this.availabilities$ = this.store.select(getAllAvailabilities);
    console.log(this.availabilities$);
  }

  ngOnDestroy() {}
}
