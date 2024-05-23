import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnDestroy, Output, PipeTransform, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { TreeStatus } from '../../../../types/dc-types';
import { SortDirection } from '../../../../types/sort-direction.type';
import { TableColumn } from '../../../../types/table-column.type';
import { Keys } from '../../../../utils/keys';
import { CellInputComponent } from '../../elements/cell-input/cell-input.component';

@Component({
  selector: 'dc-body-cell',
  templateUrl: './body-cell.component.html',
})
export class BodyCellComponent implements DoCheck, OnDestroy {

  //#region Dev: Ergül
  @Input() totalRowCount:number
  @Input() changes: any
  @Output() onRowRemoving: EventEmitter<any> = new EventEmitter();
  @Output() onRowReversing: EventEmitter<any> = new EventEmitter();
  @ViewChild (CellInputComponent) cellInputRef: CellInputComponent
  cellChange(e: any) {
    if (this._column && this._column.prop) {
      this._row[this._column.prop] = e.newValue
    }
    this.onCellChange.emit({ nativeElement: e, value: e.newValue, column: this._column })
  }

  onCellValidating(e: any) {

  }
  onCellValidated(e: any) {

  }

  getCellState() {
    if (this.changes.length > 0) {
      for (const changedItem of this.changes) {
        if (changedItem.key === this._row['$$$id']) {
          return changedItem.type
        }
      }
    }
    return '';
  }

  isEditable() {
    if (this.column.isEditable === false || this.getCellState() === 'remove') {
      return false;
    }
    return true;
  }
  

  //#endregion

  @Input() displayCheck: (row: any, column?: TableColumn, value?: any) => boolean;

  @Input() set group(group: any) {
    this._group = group;
    this.cellContext.group = group;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }

  get group() {
    return this._group;
  }

  @Input() set rowHeight(val: number) {
    this._rowHeight = val;
    this.cellContext.rowHeight = val;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }

  get rowHeight() {
    return this._rowHeight;
  }

  @Input() set isSelected(val: boolean) {
    this._isSelected = val;
    this.cellContext.isSelected = val;
    this.cd.markForCheck();
  }

  get isSelected(): boolean {
    return this._isSelected;
  }

  @Input() set expanded(val: boolean) {
    this._expanded = val;
    this.cellContext.expanded = val;
    this.cd.markForCheck();
  }

  get expanded(): boolean {
    return this._expanded;
  }

  @Input() set rowIndex(val: number) {
    this._rowIndex = val;
    this.cellContext.rowIndex = val;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }

  get rowIndex(): number {
    return this._rowIndex;
  }

  @Input() set column(column: TableColumn) {
    this._column = column;
    this.cellContext.column = column;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }

  get column(): TableColumn {
    return this._column;
  }

  @Input() set row(row: any) {
    this._row = row;
    this.cellContext.row = row;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }

  get row(): any {
    return this._row;
  }

  @Input() set sorts(val: any[]) {
    this._sorts = val;
    this.calcSortDir = this.calcSortDir(val);
  }

  get sorts(): any[] {
    return this._sorts;
  }

  @Input() set treeStatus(status: TreeStatus) {
    if (status !== 'collapsed' && status !== 'expanded' && status !== 'loading' && status !== 'disabled') {
      this._treeStatus = 'collapsed';
    } else {
      this._treeStatus = status;
    }
    this.cellContext.treeStatus = this._treeStatus;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }

  get treeStatus(): TreeStatus {
    return this._treeStatus;
  }

  @Output() activate: EventEmitter<any> = new EventEmitter();

  @Output() treeAction: EventEmitter<any> = new EventEmitter();

  @Output() onCellChange: EventEmitter<any> = new EventEmitter();

  @ViewChild('cellTemplate', { read: ViewContainerRef, static: true })
  cellTemplate: ViewContainerRef;

  @HostBinding('class')
  get columnCssClasses(): any {
    let cls = 'datatable-body-cell';
    if (this.column.cellClass) {
      if (typeof this.column.cellClass === 'string') {
        cls += ' ' + this.column.cellClass;
      } else if (typeof this.column.cellClass === 'function') {
        const res = this.column.cellClass({
          row: this.row,
          group: this.group,
          column: this.column,
          value: this.value,
          rowHeight: this.rowHeight
        });

        if (typeof res === 'string') {
          cls += ' ' + res;
        } else if (typeof res === 'object') {
          const keys = Object.keys(res);
          for (const k of keys) {
            if (res[k] === true) {
              cls += ` ${k}`;
            }
          }
        }
      }
    }
    if (!this.sortDir) {
      cls += ' sort-active';
    }
    if (this.isFocused) {
      cls += ' active';
    }
    if (this.sortDir === SortDirection.asc) {
      cls += ' sort-asc';
    }
    if (this.sortDir === SortDirection.desc) {
      cls += ' sort-desc';
    }

    return cls;
  }

  @HostBinding('style.width.px')
  get width(): number | undefined {
    return this.column.width;
  }

  @HostBinding('style.minWidth.px')
  get minWidth(): number | undefined {
    return this.column.minWidth;
  }

  @HostBinding('style.maxWidth.px')
  get maxWidth(): number | undefined {
    return this.column.maxWidth;
  }

  @HostBinding('style.height')
  get height(): string | number {
    const height = this.rowHeight;
    if (isNaN(height)) {
      return height;
    }
    return height + 'px';
  }

  sanitizedValue: any;
  value: any;
  sortDir: SortDirection;
  isFocused = false;
  onCheckboxChangeFn = this.onCheckboxChange.bind(this);
  activateFn = this.activate.emit.bind(this.activate);

  cellContext: any;

  private _isSelected: boolean;
  private _sorts: any[];
  private _column: TableColumn;
  private _row: any;
  private _group: any;
  private _rowHeight: number;
  private _rowIndex: number;
  private _expanded: boolean;
  private _element: any;
  private _treeStatus: TreeStatus;

  constructor(element: ElementRef, private cd: ChangeDetectorRef) {
    this.cellContext = {
      onCheckboxChangeFn: this.onCheckboxChangeFn,
      activateFn: this.activateFn,
      row: this.row,
      group: this.group,
      value: this.value,
      column: this.column,
      rowHeight: this.rowHeight,
      isSelected: this.isSelected,
      rowIndex: this.rowIndex,
      treeStatus: this.treeStatus,
      onTreeAction: this.onTreeAction.bind(this)
    };

    this._element = element.nativeElement;
  }

  ngDoCheck(): void {
    this.checkValueUpdates();
  }

  ngOnDestroy(): void {
    if (this.cellTemplate) {
      this.cellTemplate.clear();
    }
  }

  checkValueUpdates(): void {
    let value = '';

    if (!this.row || !this.column) {
      value = '';
    } else {
      if (typeof this.column.prop === 'undefined') {
        throw new Error('TableColumnProp is undefined.');
      }

      const val = this.column.$$valueGetter?.(this.row, this.column.prop);

      const userPipe: PipeTransform | undefined = this.column.pipe;

      if (userPipe) {
        value = userPipe.transform(val);
      } else if (value !== undefined) {
        value = val;
      }
    }

    if (this.value !== value) {
      this.value = value;
      this.cellContext.value = value;
      this.sanitizedValue = value !== null && value !== undefined ? this.stripHtml(value) : value;
      this.cd.markForCheck();
    }
  }

  @HostListener('focus')
  onFocus(): void {
    this.isFocused = true;
  }

  @HostListener('blur')
  onBlur(): void {
    this.isFocused = false;
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    this.activate.emit({
      type: 'click',
      event,
      row: this.row,
      group: this.group,
      rowHeight: this.rowHeight,
      column: this.column,
      value: this.value,
      cellElement: this._element
    });
  }

  @HostListener('dblclick', ['$event'])
  onDblClick(event: MouseEvent): void {
    this.activate.emit({
      type: 'dblclick',
      event,
      row: this.row,
      group: this.group,
      rowHeight: this.rowHeight,
      column: this.column,
      value: this.value,
      cellElement: this._element
    });
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    const keyCode = event.keyCode;
    const isTargetCell = event.target === this._element;

    const isAction =
      keyCode === Keys.return ||
      keyCode === Keys.down ||
      keyCode === Keys.up ||
      keyCode === Keys.left ||
      keyCode === Keys.right;

    if (isAction && isTargetCell) {
      event.preventDefault();
      event.stopPropagation();

      this.activate.emit({
        type: 'keydown',
        event,
        row: this.row,
        group: this.group,
        rowHeight: this.rowHeight,
        column: this.column,
        value: this.value,
        cellElement: this._element
      });
    }
  }

  onCheckboxChange(event: any): void {
    this.activate.emit({
      type: 'checkbox',
      event,
      row: this.row,
      group: this.group,
      rowHeight: this.rowHeight,
      column: this.column,
      value: this.value,
      cellElement: this._element,
      treeStatus: 'collapsed'
    });
  }

  calcSortDir(sorts: any[]): any {
    if (!sorts) {
      return;
    }

    const sort = sorts.find((s: any) => {
      return s.prop === this.column.prop;
    });

    if (sort) {
      return sort.dir;
    }
  }

  stripHtml(html: string): string {
    if (!html.replace) {
      return html;
    }
    return html.replace(/<\/?[^>]+(>|$)/g, '');
  }

  onTreeAction() {
    this.treeAction.emit(this.row);
  }

  calcLeftMargin(column: any, row: any) {
    const levelIndent = column.treeLevelIndent != null ? column.treeLevelIndent : 50;
    return column.isTreeColumn ? row.level * levelIndent : 0;
  }


}
