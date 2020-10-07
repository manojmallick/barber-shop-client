import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ComponentsModule } from './components';
import { ShopsRoutingModule } from './shops-routing.module';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { shopReducer } from './reducers/shops.reducers';
import { ShopsEffects } from './effects/shops.effects';
import { ShopListComponent } from './containers/shop-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppointmentModule } from '../appointment/appointment.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    ShopsRoutingModule,
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forFeature('shops',shopReducer),
    EffectsModule.forFeature([ShopsEffects]),
    AppointmentModule,
    NgbModule
  ],
  declarations: [
    ShopListComponent
  ],
  exports: []
})
export class ShopsModule {}
