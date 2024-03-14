import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TreeModel } from '../../../models/dc-models.model';

@Component({
  selector: 'dca-tree',
  templateUrl: './dc-tree.component.html',
  styleUrls: ['../../../../../assets/style.css', './dc-tree.component.css']
})
export class DcTreeComponent implements OnChanges {

  @Input() treeData!: TreeModel[] | any[];
  @Output() dcExpanding = new EventEmitter<Object>();
  @Output() dcCollapsing = new EventEmitter<Object>();

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['treeData']) {
      this.treeData?.forEach((item: any) => {
        item.expanded = false
      })
    }
  }

  changeOpen(node: any, event: Event) {
    node.expanded = !node.expanded;
    if (node.expanded) {
      this.dcExpanding.emit({ item: node, nativeElement: event });
    } else {
      this.dcCollapsing.emit({ item: node, nativeElement: event });
    }
  }

  changeOpenSubItems(node: any) {
    if (node.expanded) {
      this.dcExpanding.emit(node);
    } else {
      this.dcCollapsing.emit(node);
    }
  }
}
