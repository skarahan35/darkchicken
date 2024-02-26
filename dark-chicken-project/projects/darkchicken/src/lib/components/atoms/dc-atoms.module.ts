import { NgModule } from '@angular/core';
import { DCButtonComponent } from './button/dc-button.component';
import { DCInputComponent } from './input/dc-input.component';
import { CommonModule } from '@angular/common';
import { DCIconComponent } from './icon/dc-icon.component';
import { HttpClientModule } from '@angular/common/http';
import { DCCheckboxComponent } from './checkbox/dc-checkbox.component';
import { DCBreadCrumbComponent } from './bread-crumb/dc-bread-crumb.component';



@NgModule({
  declarations: [
    DCButtonComponent,
    DCInputComponent,
    DCIconComponent,
    DCCheckboxComponent,
    DCBreadCrumbComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    DCButtonComponent,
    DCInputComponent,
    DCIconComponent,
    DCCheckboxComponent,
    DCBreadCrumbComponent
  ]
})
export class DCAtomModule { }