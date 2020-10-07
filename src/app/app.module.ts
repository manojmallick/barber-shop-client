import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './core/containers/app.component';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { reducers, metaReducers } from './core/reducers';
import { environment } from 'src/environments/environment';
import { ShopResolver } from './shops/resolvers/shop.resolver';
import { AvailabilitiesResolver } from './shops/resolvers/availabilities.resolver';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    CoreModule
  ],
  providers: [ShopResolver,AvailabilitiesResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
