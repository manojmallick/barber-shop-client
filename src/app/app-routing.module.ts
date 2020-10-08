import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './core/containers/not-found-page.component';
import { ShopResolver } from './shops/resolvers/shop.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/shops',
    pathMatch: 'full',
  },
  {
    path: 'shops',
    loadChildren: () =>
      import('./shops/shops.module').then((m) => m.ShopsModule),
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
