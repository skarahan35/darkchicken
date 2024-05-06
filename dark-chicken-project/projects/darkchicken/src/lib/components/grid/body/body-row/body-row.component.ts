import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, EventEmitter, HostBinding, HostListener, Input, KeyValueDiffer, KeyValueDiffers, Output, SkipSelf } from '@angular/core';
import { ScrollbarHelper } from 'projects/darkchicken/src/lib/services/scrollbar-helper.service';
import { TreeStatus } from 'projects/darkchicken/src/lib/types/dc-types';
import { columnsByPin, columnGroupWidths, columnsByPinArr } from 'projects/darkchicken/src/lib/utils/column';
import { Keys } from 'projects/darkchicken/src/lib/utils/keys';
import { translateXY } from 'projects/darkchicken/src/lib/utils/translate';

@Component({
  selector: 'dc-body-row',
  templateUrl: './body-row.component.html',
})
export class BodyRowComponent implements DoCheck {
  @Input() totalRowCount:number

  @Input() set columns(val: any[]) {
    this._columns = val;
    this.recalculateColumns(val);
    this.buildStylesByGroup();
  }

  get columns(): any[] {
    return this._columns;
  }

  @Input() set innerWidth(val: number) {
    if (this._columns) {
      const colByPin = columnsByPin(this._columns);
      this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
    }

    this._innerWidth = val;
    this.recalculateColumns();
    this.buildStylesByGroup();
  }

  get innerWidth(): number {
    return this._innerWidth;
  }

  @Input() expanded: boolean;
  @Input() rowClass: any;
  @Input() row: any;
  @Input() group: any;
  @Input() isSelected: boolean;
  @Input() rowIndex: number;
  @Input() displayCheck: any;
  @Input() treeStatus: TreeStatus = 'collapsed';

  @Input()
  set offsetX(val: number) {
    this._offsetX = val;
    this.buildStylesByGroup();
  }
  get offsetX() {
    return this._offsetX;
  }

  @HostBinding('class')
  get cssClass() {
    let cls = 'datatable-body-row';
    if (this.isSelected) {
      cls += ' active';
    }
    if (this.rowIndex % 2 !== 0) {
      cls += ' datatable-row-odd';
    }
    if (this.rowIndex % 2 === 0) {
      cls += ' datatable-row-even';
    }

    if (this.rowClass) {
      const res = this.rowClass(this.row);
      if (typeof res === 'string') {
        cls += ` ${res}`;
      } else if (typeof res === 'object') {
        const keys = Object.keys(res);
        for (const k of keys) {
          if (res[k] === true) {
            cls += ` ${k}`;
          }
        }
      }
    }

    return cls;
  }

  @HostBinding('style.height.px')
  @Input()
  rowHeight: number;

  @HostBinding('style.width.px')
  get columnsTotalWidths(): string {
    return this._columnGroupWidths.total;
  }

  @Output() activate: EventEmitter<any> = new EventEmitter();
  @Output() treeAction: EventEmitter<any> = new EventEmitter();

 @Output() onRowChange: EventEmitter<any> = new EventEmitter();

  _element: any;
  _columnGroupWidths: any;
  _columnsByPin: any;
  _offsetX: number;
  _columns: any[];
  _innerWidth: number;
  _groupStyles: { [prop: string]: {} } = {
    left: {},
    center: {},
    right: {}
  };

  private _rowDiffer: KeyValueDiffer<{}, {}>;

  constructor(
    private differs: KeyValueDiffers,
    @SkipSelf() private scrollbarHelper: ScrollbarHelper,
    private cd: ChangeDetectorRef,
    element: ElementRef
  ) {
    this._element = element.nativeElement;
    this._rowDiffer = differs.find({}).create();
  }

  ngDoCheck(): void {
    if (this._rowDiffer.diff(this.row)) {
      this.cd.markForCheck();
    }
  }

  trackByGroups(index: number, colGroup: any): any {
    return colGroup.type;
  }

  columnTrackingFn(index: number, column: any): any {
    return column.$$id;
  }

  buildStylesByGroup() {
    this._groupStyles['left'] = this.calcStylesByGroup('left');
    this._groupStyles['center'] = this.calcStylesByGroup('center');
    this._groupStyles['right'] = this.calcStylesByGroup('right');
    this.cd.markForCheck();
  }

  calcStylesByGroup(group: string) {
    const widths = this._columnGroupWidths;
    const offsetX = this.offsetX;

    const styles = {
      width: `${widths[group]}px`
    };

    if (group === 'left') {
      translateXY(styles, offsetX, 0);
    } else if (group === 'right') {
      const bodyWidth = parseInt(this.innerWidth + '', 0);
      const totalDiff = widths.total - bodyWidth;
      const offsetDiff = totalDiff - offsetX;
      const offset = (offsetDiff + this.scrollbarHelper.width - 7) * -1;
      translateXY(styles, offset, 0);
    }

    return styles;
  }

  onActivate(event: any, index: number): void {
    event.cellIndex = index;
    event.rowElement = this._element;
    this.activate.emit(event);
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    const keyCode = event.keyCode;
    const isTargetRow = event.target === this._element;

    const isAction =
      keyCode === Keys.return ||
      keyCode === Keys.down ||
      keyCode === Keys.up ||
      keyCode === Keys.left ||
      keyCode === Keys.right;

    if (isAction && isTargetRow) {
      event.preventDefault();
      event.stopPropagation();

      this.activate.emit({
        type: 'keydown',
        event,
        row: this.row,
        rowElement: this._element
      });
    }
  }

  @HostListener('mouseenter', ['$event'])
  onMouseenter(event: any): void {
    this.activate.emit({
      type: 'mouseenter',
      event,
      row: this.row,
      rowElement: this._element
    });
  }

  recalculateColumns(val: any[] = this.columns): void {
    this._columns = val;
    const colsByPin = columnsByPin(this._columns);
    this._columnsByPin = columnsByPinArr(this._columns);
    this._columnGroupWidths = columnGroupWidths(colsByPin, this._columns);
  }

  onTreeAction() {
    this.treeAction.emit();
  }

  //#region Dev: Ergül
  @Input() changes:any
  @Output() onRowRemoving: EventEmitter<any>= new EventEmitter();
  @Output() onRowReversing: EventEmitter<any> = new EventEmitter();
  onCellChange(e:any){
    this.onRowChange.emit({cell:e, row:this.row})
  }

  getRowState() {
    if (this.changes.length > 0) {
      for (const changedItem of this.changes) {
        if (changedItem.key === this.row['$$$id']) {
          return changedItem.type
        }
      }
    }
    return '';
  }

  //#endregion
}
