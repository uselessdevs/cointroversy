import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from './store';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';

// guards
import * as fromGuards from './guards';

// services
import * as fromServices from './services';
import {AgmCoreModule} from "@agm/core";
import {BrowserModule} from "@angular/platform-browser";

// routes
export const ROUTES: Routes = [
  {
    path: '',
    canActivate: [fromGuards.PanelGuard],
    component: fromContainers.HomeComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature(effects),
    FormsModule,
    ReactiveFormsModule,
    /*AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDPFzPiOD5gzKQdX9yp7ibaqAcuV-IA0VY',
      libraries: ['places'],
    }),*/
  ],
  providers: [...fromServices.services, ...fromGuards.guards],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [...fromContainers.containers, ...fromComponents.components],
})

export class ProductModule {}
