import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DCAtomModule, DCGridModule, DCMoleculesModule } from 'projects/darkchicken';
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
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListsComponent } from './lists/lists.component';
import { GridComponent } from './grid/grid.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';




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
    SidebarComponent,
    ListsComponent,
    GridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DCAtomModule,
    DCMoleculesModule,
    DcToastNgModule,
    CommonModule,
    DCGridModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
