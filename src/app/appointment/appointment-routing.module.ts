import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentComponent } from '../shops/containers/appointment.component';
import { ConfirmationComponent } from '../shops/containers/confirmation.component';
import { AppointmentResolver } from '../shops/resolvers/appointment.resolver';
import { AvailabilitiesResolver } from '../shops/resolvers/availabilities.resolver';
import { BarbersResolver } from '../shops/resolvers/barbers.resolver';

export const routes: Routes = [
  {
    path: '',
    component: AppointmentComponent,
    resolve:{
     availabilities: AvailabilitiesResolver,
     barbers:BarbersResolver
    },
    
  },
  {
    path: ':appointmentId',
    component: ConfirmationComponent,
    resolve:{
     appointment: AppointmentResolver
    },
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentRoutingModule {}
