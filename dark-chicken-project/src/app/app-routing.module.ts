import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { InputsComponent } from './inputs/inputs.component';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';
import { IconComponent } from './icon/icon.component';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { ToastComponent } from './toast/toast.component';

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
},
{
  path:'pages/bread-crumbs',
  component:BreadCrumbsComponent
},
{
  path:'pages/spinners',
  component: SpinnersComponent
},
{
  path: 'pages/toasts',
  component: ToastComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
