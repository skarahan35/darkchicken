import { NgModule } from '@angular/core';
import { DCButtonComponent } from './button/dc-button.component';
import { DCInputComponent } from './input/dc-input.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    DCButtonComponent,
    DCInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DCButtonComponent,
    DCInputComponent
  ]
})
export class DCAtomModule { }