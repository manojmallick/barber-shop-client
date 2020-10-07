import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavItemComponent } from './components/nav-item.component';
import { AppComponent } from './containers/app.component';
import { LayoutComponent } from './components/layout.component';
import { NotFoundPageComponent } from './containers/not-found-page.component';
import { FooterComponent } from './components/footer.component';

export const COMPONENTS = [
  AppComponent,
  NotFoundPageComponent,
  LayoutComponent,
  NavItemComponent,
  FooterComponent
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {}
