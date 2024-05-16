import { NgModule } from '@angular/core';
import { DCAtomModule } from './components/atoms/dc-atoms.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DcDropdownComponent } from './components/molecules/dc-dropdown/dc-dropdown.component';
import { DCMoleculeModule } from './components/molecules/dc-molecules.module';
import { DCGridModule } from '../public-api';



@NgModule({
  declarations: [
  ],
  imports: [
    DCAtomModule,
    DCMoleculeModule,
    DCGridModule,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
  ]
})
export class DarkchickenModule { }
