import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DCAtomModule } from 'projects/darkchicken';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DCAtomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
