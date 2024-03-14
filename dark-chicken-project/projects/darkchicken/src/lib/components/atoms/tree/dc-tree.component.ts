import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TreeModel } from '../../../models/dc-models.model';

@Component({
  selector: 'dca-tree',
  templateUrl: './dc-tree.component.html',
  styleUrls: ['../../../../../assets/style.css', './dc-tree.component.css']
})
export class DcTreeComponent implements OnChanges {

  @Input() treeData!: TreeModel[] | any[];
  @Output() dcExpanded = new EventEmitter<Object>();
  @Output() dcCollapsed = new EventEmitter<Object>();

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['treeData']) {
      this.treeData?.forEach((item: any) => {
        item.expanded = false
      })
    }
  }

  changeOpen(item: any, event: Event) {
    item.expanded = !item.expanded;
    if (item.expanded) {
      this.dcExpanded.emit({ item: item, nativeElement: event });
    } else {
      this.dcCollapsed.emit({ item: item, nativeElement: event });
    }
  }

  changeOpenSubItems(item: any) {
    if (item.expanded) {
      this.dcExpanded.emit(item);
    } else {
      this.dcCollapsed.emit(item);
    }
  }
}
