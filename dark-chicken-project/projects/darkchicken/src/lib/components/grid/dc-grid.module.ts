import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DcGridComponent } from './dc-grid/dc-grid.component';
import { GridHeaderCellComponent } from './grid-header-cell/grid-header-cell.component';
import { GridBodyCellComponent } from './grid-body-cell/grid-body-cell.component';
import { GridBodyRowComponent } from './grid-body-row/grid-body-row.component';



@NgModule({
  declarations: [
    DcGridComponent,
    GridHeaderCellComponent,
    GridBodyCellComponent,
    GridBodyRowComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,

  ],
  exports: [
    DcGridComponent,
    GridHeaderCellComponent,
    GridBodyCellComponent,
    GridBodyRowComponent
  ]
})
export class DCGridModule { }