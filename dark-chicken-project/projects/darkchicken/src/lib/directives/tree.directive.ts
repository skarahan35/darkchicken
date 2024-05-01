import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[dc-datatable-tree-toggle]' })
export class DataTableColumnCellTreeToggle {
  constructor(public template: TemplateRef<any>) {}
}
