import { NgModule } from '@angular/core';
import { DCAtomModule } from './components/atoms/dc-atoms.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DcDropdownComponent } from './components/molecules/dc-dropdown/dc-dropdown.component';



@NgModule({
  declarations: [
  ],
  imports: [
    DCAtomModule,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
  ]
})
export class DarkchickenModule { }
