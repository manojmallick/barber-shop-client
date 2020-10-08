import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ShopDetailsComponent } from './shop-details.component';
import { AppointmentDetailsComponent } from './appointment-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ControlMessagesComponent } from '../validation/control-messages.component';
import { ValidationService } from '../validation/validation.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmationDetailsComponent } from './confirmation-details.component';

export const COMPONENTS = [
  ShopDetailsComponent,
  AppointmentDetailsComponent,
  ControlMessagesComponent,
  ConfirmationDetailsComponent
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  declarations: COMPONENTS,
  providers: [ValidationService],
  exports: COMPONENTS,
})
export class ComponentsModule {}
