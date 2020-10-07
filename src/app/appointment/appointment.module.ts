import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import { AppointmentRoutingModule } from './appointment-routing.module';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../shops/components';
import { AvailabilityReducer } from '../shops/reducers/availabilities';
import { AppointmentComponent } from '../shops/containers/appointment.component';
import { AvailabilitiesEffects } from '../shops/effects/availabilities';
import { ShopsEffects } from '../shops/effects/shops.effects';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    AppointmentRoutingModule,
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forFeature('availabilities',AvailabilityReducer),
    EffectsModule.forFeature([AvailabilitiesEffects]),
    NgbModule
  ],
  declarations: [
    AppointmentComponent
  ],
  exports: []
})
export class AppointmentModule {}