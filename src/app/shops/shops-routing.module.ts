import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopListComponent } from './containers/shop-list.component';
import { ShopResolver } from './resolvers/shop.resolver';

export const routes: Routes = [
  {
    path: ':id/appointments',
    loadChildren: () =>
      import('../appointment/appointment.module').then(
        (m) => m.AppointmentModule
      ),
  },
  {
    path: ':id',
    redirectTo: ':id/appointments',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ShopListComponent,
    resolve: {
      shops: ShopResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopsRoutingModule {}
