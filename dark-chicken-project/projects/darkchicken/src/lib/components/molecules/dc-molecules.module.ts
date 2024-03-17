import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DcDropdownComponent } from './dc-dropdown/dc-dropdown.component';
import { DCAtomModule } from '../atoms';



@NgModule({
  declarations: [
    DcDropdownComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DCAtomModule
  ],
  exports: [
    DcDropdownComponent
  ]
})
export class DCMoleculesModule { }