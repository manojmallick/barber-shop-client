import {
  Component,
  OnDestroy,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Router } from '@angular/router';
import { Shop } from '../models';

@Component({
  selector: 'bs-shop-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="mt-5 pt-5" *ngIf="shop">
      <div class="row details">
        <div class="col">
          <img
            *ngIf="avatar"
            [src]="avatar"
            class="img-fluid"
            alt="Store image"
          />
        </div>
        <div class="col">
          <div class="row mt-3">
            <div class="col">
              <h4 class="text-center font-weight-bold">{{address}}</h4>
              <div class="mt-4">
                <p>{{ email }}</p>
                <p>Telephone: {{ phone }}</p>
              </div>

              <button
                type="submit"
                class="btn btn-primary font-weight-bold submit mt-5"
                (click)="goToShopDetails()"
              >
                Make an appointment
              </button>
            </div>
            <div class="col">
              <div class="row" *ngFor="let schedule of schedules">
                <div class="col">
                  <p class="timing">
                    <strong>{{ schedule.dayOfWeek }}</strong>
                  </p>
                </div>
                <div class="col">
                  <p class="timing">
                    {{ schedule.startTime }} to {{ schedule.endTime }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ShopDetailsComponent implements OnDestroy {
  @Input() shop: Shop;

  constructor(private router: Router) {}
  
  goToShopDetails() {
    this.router.navigateByUrl('/shops/' + this.id);
  }
  get id() {
    return this.shop.id;
  }
  get name() {
    return this.shop.name;
  }
  get address() {
    return this.shop.address;
  }
  get avatar() {
    return this.shop.avatar;
  }
  get phone() {
    return this.shop.phone;
  }
  get email() {
    return this.shop.email;
  }
  get schedules() {
    return this.shop.schedules;
  }

  ngOnDestroy() {}
}
