import { NgModule } from '@angular/core';
import { DCButtonComponent } from './button/dc-button.component';
import { DCInputComponent } from './input/dc-input.component';
import { CommonModule } from '@angular/common';
import { DCIconComponent } from './icon/dc-icon.component';
import { HttpClientModule } from '@angular/common/http';
import { DCCheckboxComponent } from './checkbox/dc-checkbox.component';



@NgModule({
  declarations: [
    DCButtonComponent,
    DCInputComponent,
    DCIconComponent,
    DCCheckboxComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    DCButtonComponent,
    DCInputComponent,
    DCIconComponent,
    DCCheckboxComponent
  ]
})
export class DCAtomModule { }