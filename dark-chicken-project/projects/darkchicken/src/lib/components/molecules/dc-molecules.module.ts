import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DcDropdownComponent } from './dc-dropdown/dc-dropdown.component';
import { DCAtomModule } from '../atoms';
import { DcTabComponent } from './dc-tab/dc-tab.component';



@NgModule({
  declarations: [
    DcDropdownComponent,
    DcTabComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DCAtomModule
  ],
  exports: [
    DcDropdownComponent,
    DcTabComponent
  ]
})
export class DCMoleculesModule { }