import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ShopDetailsComponent } from './shop-details.component';

export const COMPONENTS = [
  ShopDetailsComponent
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ComponentsModule {}
