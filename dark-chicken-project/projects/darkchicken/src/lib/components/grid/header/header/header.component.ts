import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, Input, OnDestroy, Output } from '@angular/core';
import { DataTableColumnDirective } from 'projects/darkchicken/src/lib/directives/column.directive';
import { SelectionType } from 'projects/darkchicken/src/lib/types/selection.type';
import { SortType } from 'projects/darkchicken/src/lib/types/sort.type';
import { columnsByPin, columnGroupWidths, columnsByPinArr } from 'projects/darkchicken/src/lib/utils/column';
import { translateXY } from 'projects/darkchicken/src/lib/utils/translate';
@Component({
  selector: 'dc-header',
  templateUrl: './header.component.html',
  host: {
    class: 'datatable-header'
  },
})
export class HeaderComponent implements OnDestroy {
  @Input() sortAscendingIcon: any;
  @Input() sortDescendingIcon: any;
  @Input() sortUnsetIcon: any;
  @Input() scrollbarH: boolean;
  @Input() dealsWithGroup: boolean;
  @Input() targetMarkerTemplate: any;

  //#region Dev: Ergül

  @Input() rowHeight: number | 'auto' | ((row?: any) => number);
  _allowColumnSearch:boolean | null
  @Input() set allowColumnSearch(val:boolean | null){
    this._allowColumnSearch = val
    if(isNaN(+this.headerHeight)){
      this.headerHeight = (+(this.headerHeight.replace('px',''))) //Converting string to int hight value
    }

  }
  get allowColumnSearch(){
    return this._allowColumnSearch
  }
//#endregion

  targetMarkerContext: any;

  @Input() set innerWidth(val: number) {
    this._innerWidth = val;
    setTimeout(() => {
      if (this._columns) {
        const colByPin = columnsByPin(this._columns);
        this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
        this.setStylesByGroup();
      }
    });
  }

  get innerWidth(): number {
    return this._innerWidth;
  }

  @Input() sorts: any[];
  @Input() sortType: SortType;
  @Input() allRowsSelected: boolean;
  @Input() selectionType: SelectionType;
  @Input() reorderable: boolean;

  dragEventTarget: any;

  @HostBinding('style.height')
  @Input()
  set headerHeight(val: any) {
    if (this.allowColumnSearch) {     //Dev:Ergül
      val = val + this.rowHeight      //Dev:Ergül
    }                                 //Dev:Ergül

    if (val !== 'auto') {
      this._headerHeight = `${val}px`;
    } else {
      this._headerHeight = val;
    }
  }

  get headerHeight(): any {
    return this._headerHeight;
  }

  @Input() set columns(val: any[]) {
    this._columns = val;

    const colsByPin = columnsByPin(val);
    this._columnsByPin = columnsByPinArr(val);
    setTimeout(() => {
      this._columnGroupWidths = columnGroupWidths(colsByPin, val);
      this.setStylesByGroup();
    });
  }

  get columns(): any[] {
    return this._columns;
  }

  @Input()
  set offsetX(val: number) {
    this._offsetX = val;
    this.setStylesByGroup();
  }
  get offsetX() {
    return this._offsetX;
  }

  @Output() sort: EventEmitter<any> = new EventEmitter();
  @Output() reorder: EventEmitter<any> = new EventEmitter();
  @Output() resize: EventEmitter<any> = new EventEmitter();
  @Output() select: EventEmitter<any> = new EventEmitter();
  @Output() columnContextmenu = new EventEmitter<{ event: MouseEvent; column: any }>(false);
  //dev:serkan
  @Output() onColumnSearch = new EventEmitter()

  _columnsByPin: any;
  _columnGroupWidths: any = {
    total: 100
  };
  _innerWidth: number;
  _offsetX: number;
  _columns: any[];
  _headerHeight: string;
  _styleByGroup: { [prop: string]: {} } = {
    left: {},
    center: {},
    right: {}
  };

  private destroyed = false;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnDestroy(): void {
    this.destroyed = true;
  }

  onLongPressStart({ event, model }: { event: any; model: any }) {
    model.dragging = true;
    this.dragEventTarget = event;
  }

  onLongPressEnd({ event, model }: { event: any; model: any }) {
    this.dragEventTarget = event;

    // delay resetting so sort can be
    // prevented if we were dragging
    setTimeout(() => {
      // datatable component creates copies from columns on reorder
      // set dragging to false on new objects
      const column = this._columns.find(c => c.$$id === model.$$id);
      if (column) {
        column.dragging = false;
      }
    }, 5);
  }

  @HostBinding('style.width')
  get headerWidth(): string {
    if (this.scrollbarH) {
      return this.innerWidth + 'px';
    }

    return '100%';
  }

  trackByGroups(index: number, colGroup: any): any {
    return colGroup.type;
  }

  columnTrackingFn(index: number, column: any): any {
    return column.$$id;
  }

  onColumnResized(width: number, column: DataTableColumnDirective): void {
    if (width <= column.minWidth) {
      width = column.minWidth;
    } else if (width >= column.maxWidth) {
      width = column.maxWidth;
    }

    this.resize.emit({
      column,
      prevValue: column.width,
      newValue: width
    });
  }

  onColumnReordered({ prevIndex, newIndex, model }: any): void {
    const column = this.getColumn(newIndex);
    column.isTarget = false;
    column.targetMarkerContext = undefined;
    this.reorder.emit({
      column: model,
      prevValue: prevIndex,
      newValue: newIndex
    });
  }

  onTargetChanged({ prevIndex, newIndex, initialIndex }: any): void {
    if (prevIndex || prevIndex === 0) {
      const oldColumn = this.getColumn(prevIndex);
      oldColumn.isTarget = false;
      oldColumn.targetMarkerContext = undefined;
    }
    if (newIndex || newIndex === 0) {
      const newColumn = this.getColumn(newIndex);
      newColumn.isTarget = true;

      if (initialIndex !== newIndex) {
        newColumn.targetMarkerContext = {
          class: 'targetMarker '.concat(initialIndex > newIndex ? 'dragFromRight' : 'dragFromLeft')
        };
      }
    }
  }

  getColumn(index: number): any {
    const leftColumnCount = this._columnsByPin[0].columns.length;
    if (index < leftColumnCount) {
      return this._columnsByPin[0].columns[index];
    }

    const centerColumnCount = this._columnsByPin[1].columns.length;
    if (index < leftColumnCount + centerColumnCount) {
      return this._columnsByPin[1].columns[index - leftColumnCount];
    }

    return this._columnsByPin[2].columns[index - leftColumnCount - centerColumnCount];
  }

  onSort({ column, prevValue, newValue }: any): void {
    // if we are dragging don't sort!
    if (column.dragging) {
      return;
    }

    const sorts = this.calcNewSorts(column, prevValue, newValue);
    this.sort.emit({
      sorts,
      column,
      prevValue,
      newValue
    });
  }

  calcNewSorts(column: any, prevValue: number, newValue: number): any[] {
    let idx = 0;

    if (!this.sorts) {
      this.sorts = [];
    }

    const sorts = this.sorts.map((s, i) => {
      s = { ...s };
      if (s.prop === column.prop) {
        idx = i;
      }
      return s;
    });

    if (newValue === undefined) {
      sorts.splice(idx, 1);
    } else if (prevValue) {
      sorts[idx].dir = newValue;
    } else {
      if (this.sortType === SortType.single) {
        sorts.splice(0, this.sorts.length);
      }

      sorts.push({ dir: newValue, prop: column.prop });
    }

    return sorts;
  }

  setStylesByGroup() {
    this._styleByGroup['left'] = this.calcStylesByGroup('left');
    this._styleByGroup['center'] = this.calcStylesByGroup('center');
    this._styleByGroup['right'] = this.calcStylesByGroup('right');
    if (!this.destroyed) {
      this.cd.detectChanges();
    }
  }

  calcStylesByGroup(group: string): any {
    const widths = this._columnGroupWidths;
    const offsetX = this.offsetX;

    const styles = {
      width: `${widths[group]}px`
    };

    if (group === 'center') {
      translateXY(styles, offsetX * -1, 0);
    } else if (group === 'right') {
      const totalDiff = widths.total - this.innerWidth;
      const offset = totalDiff * -1;
      translateXY(styles, offset, 0);
    }

    return styles;
  }

  //dev:serkan
  columnSearch(e: any) {
    this.onColumnSearch.emit(e)
  }
}
