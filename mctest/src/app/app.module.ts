import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//import { AppsComponent } from './apps/apps.component';
//import { DevicesComponent } from './devices/devices.component';
import { AppRoutingModule, routingComponents } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [ BrowserModule, AppRoutingModule],
  // imports: [
  //   BrowserModule,
  //   FormsModule,
  //   HttpModule
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
