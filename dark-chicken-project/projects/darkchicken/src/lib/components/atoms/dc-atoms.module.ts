import { NgModule } from '@angular/core';
import { DCButtonComponent } from './button/dc-button.component';
import { DCInputComponent } from './input/dc-input.component';
import { CommonModule } from '@angular/common';
import { DCIconComponent } from './icon/dc-icon.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DCButtonComponent,
    DCInputComponent,
    DCIconComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    DCButtonComponent,
    DCInputComponent,
    DCIconComponent
  ]
})
export class DCAtomModule { }