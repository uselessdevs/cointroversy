import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects, CustomSerializer } from './store';

// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

// this would be done dynamically with webpack for builds
const environment = {
  development: true,
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyAdjuo-iD_kbeTCYXIfx1FUuieijJf1WBg",
    authDomain: "e-factions.firebaseapp.com",
    databaseURL: "https://e-factions.firebaseio.com",
    projectId: "e-factions",
    storageBucket: "e-factions.appspot.com",
    messagingSenderId: "251894085734"
  },
  googleMapsKey: 'AIzaSyDPFzPiOD5gzKQdX9yp7ibaqAcuV-IA0VY',
};

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [/*storeFreeze*/]
  : [];

// bootstrap
import { AppComponent } from './containers/app/app.component';
import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {AgmCoreModule} from "@agm/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

// routes
export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: '../products/product.module#ProductModule',
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    environment.development ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
