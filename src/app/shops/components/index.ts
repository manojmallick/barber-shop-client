import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ShopDetailsComponent } from './shop-details.component';
import { AppointmentDetailsComponent } from './appointment-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ControlMessagesComponent } from '../validation/control-messages.component';
import { ValidationService } from '../validation/validation.service';

export const COMPONENTS = [
  ShopDetailsComponent,
  AppointmentDetailsComponent,
  ControlMessagesComponent
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    FormsModule
  ],
  declarations: COMPONENTS,
  providers: [ValidationService],
  exports: COMPONENTS,
})
export class ComponentsModule {}
