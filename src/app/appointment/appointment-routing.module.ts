import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentComponent } from '../shops/containers/appointment.component';
import { AvailabilitiesResolver } from '../shops/resolvers/availabilities.resolver';

export const routes: Routes = [
  {
    path: '',
    component: AppointmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentRoutingModule {}
