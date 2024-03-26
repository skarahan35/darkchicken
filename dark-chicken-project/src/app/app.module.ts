import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DCAtomModule, DCMoleculesModule } from 'projects/darkchicken';
import { InputsComponent } from './inputs/inputs.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';
import { IconComponent } from './icon/icon.component';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { DcToastNgModule } from 'dc-toast-ng';
import { ToastComponent } from './toast/toast.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreeComponent } from './tree/tree.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListsComponent } from './lists/lists.component';



@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,
    ButtonsComponent,
    CheckboxesComponent,
    IconComponent,
    BreadCrumbsComponent,
    SpinnersComponent,
    ToastComponent,
    TreeComponent,
    DropdownsComponent,
    TabsComponent,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DCAtomModule,
    DCMoleculesModule,
    DcToastNgModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
