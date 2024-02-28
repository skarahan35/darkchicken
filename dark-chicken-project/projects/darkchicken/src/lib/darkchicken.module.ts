import { NgModule } from '@angular/core';
import { DCAtomModule } from './components/atoms/dc-atoms.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastDirective } from './directives/toast.directive';



@NgModule({
  declarations: [
    ToastDirective
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
