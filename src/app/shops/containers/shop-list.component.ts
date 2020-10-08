import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppState } from 'src/app/core/reducers';
import { Shop } from '../models';
import { getAllShops } from '../selectors/shop.selectors';

@Component({
  selector: 'bs-shop-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <bs-shop-detail
        *ngFor="let shop of shops$ | async"
        [shop]="shop"
      ></bs-shop-detail>
    </div>
  `,
})
export class ShopListComponent implements OnDestroy {
  shops$: Observable<Shop[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.shops$ = this.store.select(getAllShops);
  }

  ngOnDestroy() {}
}
