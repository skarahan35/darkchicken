import { Component, Input, OnChanges } from '@angular/core';
import { ISummaryColumn } from '../../../../models/dc-grid.model';
import { defaultSumFunc, noopSumFunc } from '../../../../utils/summary-row';

@Component({
  selector: 'dc-summary-row',
  templateUrl: './summary-row.component.html',
  host: {
    class: 'datatable-summary-row'
  }
})
export class SummaryRowComponent implements OnChanges {
  @Input() rows: any[];
  @Input() columns: ISummaryColumn[];

  @Input() rowHeight: number;
  @Input() offsetX: number;
  @Input() innerWidth: number;

  _internalColumns: ISummaryColumn[];
  summaryRow: any = {};

  ngOnChanges() {
    if (!this.columns || !this.rows) {
      return;
    }
    this.updateInternalColumns();
    this.updateValues();
  }

  private updateInternalColumns() {
    this._internalColumns = this.columns.map(col => ({
      ...col,
      cellTemplate: col.summaryTemplate
    }));
  }

  private updateValues() {
    this.summaryRow = {};

    this.columns
      .filter(col => !col.summaryTemplate)
      .forEach(col => {
        const cellsFromSingleColumn = this.rows.map(row => row[col.prop]);
        const sumFunc = this.getSummaryFunction(col);

        this.summaryRow[col.prop] = col.pipe
          ? col.pipe.transform(sumFunc(cellsFromSingleColumn))
          : sumFunc(cellsFromSingleColumn);
      });
  }

  private getSummaryFunction(column: ISummaryColumn): (a: any[]) => any {
    if (column.summaryFunc === undefined) {
      return defaultSumFunc;
    } else if (column.summaryFunc === null) {
      return noopSumFunc;
    } else {
      return column.summaryFunc;
    }
  }
}
