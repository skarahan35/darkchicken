import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SummaryRowComponent } from './body/summary-row/summary-row.component';
import { BodyCellComponent } from './body/body-cell/body-cell.component';
import { BodyRowWrapperComponent } from './body/body-row-wrapper/body-row-wrapper.component';
import { BodyRowComponent } from './body/body-row/body-row.component';
import { BodyComponent } from './body/body/body.component';
import { ScrollerComponent } from './body/scroller/scroller.component';
import { ProgressBarComponent } from './body/progress-bar/progress-bar.component';
import { SelectionComponent } from './body/selection/selection.component';
import { FooterComponent } from './footer/footer/footer.component';
import { PagerComponent } from './footer/pager/pager.component';
import { HeaderCellComponent } from './header/header-cell/header-cell.component';
import { HeaderComponent } from './header/header/header.component';
import { ResizeableDirective } from '../../directives/resizeable.directive';
import { LongPressDirective } from '../../directives/long-press.directive';
import { DraggableDirective } from '../../directives/draggable.directive';
import { DatatableComponent } from './datatable.component';
import { ScrollbarHelper } from '../../services/scrollbar-helper.service';
import { ColumnChangesService } from '../../services/column-changes.service';
import { DimensionsHelper } from '../../services/dimensions-helper.service';
import { DCAtomModule } from '../atoms';
import { CellInputComponent } from './elements/cell-input/cell-input.component';
import { ColumnSearchComponent } from './elements/column-search/column-search.component';
import { ToolbarComponent } from './elements/toolbar/toolbar.component';
import { GridSearchComponent } from './elements/toolbar/grid-search/grid-search/grid-search.component';
import { ColumnChooserComponent } from './elements/toolbar/column-chooser/column-chooser.component';
import { ColumnReorderComponent } from './elements/toolbar/column-reorder/column-reorder.component';
import { DCMoleculeModule } from '../molecules';



@NgModule({
  declarations: [
    SummaryRowComponent,
    BodyCellComponent,
    BodyRowWrapperComponent,
    BodyRowComponent,
    BodyComponent,
    ScrollerComponent,
    ProgressBarComponent,
    SelectionComponent,
    FooterComponent,
    PagerComponent,
    HeaderCellComponent,
    HeaderComponent,
    ResizeableDirective,
    LongPressDirective,
    DraggableDirective,
    DatatableComponent,
    CellInputComponent,
    ColumnSearchComponent,
    ToolbarComponent,
    GridSearchComponent,
    ColumnChooserComponent,
    ColumnReorderComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DCAtomModule,
    DCMoleculeModule

  ],
  exports: [
    SummaryRowComponent,
    BodyCellComponent,
    BodyRowWrapperComponent,
    BodyRowComponent,
    BodyComponent,
    ScrollerComponent,
    ProgressBarComponent,
    SelectionComponent,
    FooterComponent,
    PagerComponent,
    HeaderCellComponent,
    HeaderComponent,
    ResizeableDirective,
    LongPressDirective,
    DraggableDirective,
    DatatableComponent,
    ToolbarComponent
  ],
  providers:[ScrollbarHelper,ColumnChangesService,DimensionsHelper]
})
export class DCGridModule { }