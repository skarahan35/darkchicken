import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { InputsComponent } from './inputs/inputs.component';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';
import { IconComponent } from './icon/icon.component';

const routes: Routes = [{
  path:'pages/buttons',
  component: ButtonsComponent
},
{
  path:'pages/inputs',
  component:InputsComponent
},
{
  path:'pages/checkboxes',
  component:CheckboxesComponent
},
{
  path:'pages/icons',
  component:IconComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
