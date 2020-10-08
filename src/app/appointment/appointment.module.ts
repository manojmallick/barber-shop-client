import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import { AppointmentRoutingModule } from './appointment-routing.module';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../shops/components';
import { AvailabilityReducer } from '../shops/reducers/availabilities.reducers';
import { AppointmentComponent } from '../shops/containers/appointment.component';
import { AvailabilitiesEffects } from '../shops/effects/availabilities.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppointmentEffects } from '../shops/effects/appointment.effects';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    AppointmentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forFeature('availabilities',AvailabilityReducer),
    EffectsModule.forFeature([AvailabilitiesEffects,AppointmentEffects]),
    ToastrModule.forRoot(),
    NgbModule
  ],
  declarations: [
    AppointmentComponent
  ],

  exports: []
})
export class AppointmentModule {}
