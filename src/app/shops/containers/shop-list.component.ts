import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/reducers';
import { Shop } from '../models/shop';
import { getAllShops } from '../selectors/entity.selectors';

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

  constructor(private store: Store<AppState>) {
    console.log("===>2");
  }

  ngOnInit() {
    this.shops$ = this.store.select(getAllShops);
  }

  ngOnDestroy() {}
}
