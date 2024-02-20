import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DCAtomModule } from 'projects/darkchicken';
import { InputsComponent } from './inputs/inputs.component';



@NgModule({
  declarations: [
    AppComponent,
    InputsComponent
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
