import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import {  GridComponent } from './cards/grid/grid.component';
import { ProcessingComponent } from './cards/grid/processing/processing.component';
import { ShippedComponent } from './cards/grid/shipped/shipped.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    GridComponent,
    ProcessingComponent,
    ShippedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
