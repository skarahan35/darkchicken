import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { TreeModel } from '../../../models/dc-models.model';

@Component({
  selector: 'dca-tree',
  templateUrl: './dc-tree.component.html',
  styleUrls: ['../../../../../assets/style.css','./dc-tree.component.css']
})
export class DcTreeComponent implements AfterViewInit{

  @Input() treeData!: TreeModel[] | any[];
  @Output() dcExpanded = new EventEmitter<any>();
  @Output() dcCollapsed = new EventEmitter<any>();

  constructor() {}
  ngAfterViewInit(): void {
    this.treeData?.forEach((item:any) => {
      item.expanded = false
    })
  }

  


  changeOpen(item: any) {
    item.expanded = !item.expanded;
    if (item.expanded) {
      this.dcExpanded.emit(item);
    } else {
      this.dcCollapsed.emit(item);
    }
  }
}
