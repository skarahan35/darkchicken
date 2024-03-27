import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TreeModel } from '../../../models/dc-models.model';

@Component({
  selector: 'dca-tree',
  templateUrl: './dc-tree.component.html',
  styleUrls: ['../../../../../assets/style.css', './dc-tree.component.css']
})
export class DcTreeComponent implements OnChanges {

  @Input() treeData!: TreeModel[] | any[];
  @Input() disabled: boolean = false
  @Input() visible: boolean = true


  @Output() dcExpanding = new EventEmitter<Object>();
  @Output() dcCollapsing = new EventEmitter<Object>();
  @Output() dcClick = new EventEmitter<Object>()
  @Output() dcHover = new EventEmitter<Object>()
  @Output() dcMouseUp = new EventEmitter<Object>()
  @Output() dcMouseDown = new EventEmitter<Object>()
  @Output() dcMouseLeave = new EventEmitter<Object>()
  @Output() dcMouseEnter = new EventEmitter<Object>()
  @Output() dcDoubleClick = new EventEmitter<Object>()

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
    this.dcClick.emit({ item: node, nativeElement: event })
    if (node.expanded) {
      this.dcExpanding.emit({ item: node, nativeElement: event });
    } else {
      this.dcCollapsing.emit({ item: node, nativeElement: event });
    }
  }

  changeOpenSubItems(node: any) {
    this.dcClick.emit(node)

    if (node.expanded) {
      this.dcExpanding.emit(node);
    } else {
      this.dcCollapsing.emit(node);
    }
  }

  //#region onDoubleClick Event
  onDoubleClick(node:any ,e: Event) {
    this.dcDoubleClick.emit({node:node,  nativeElement: e })
  }
  //#endregion

  //#region onClick Event
  onClick(node:any ,e: Event) {
    this.dcClick.emit({node:node,  nativeElement: e })
  }
  //#endregion

  //#region onHover Event
  onHover(node:any ,e: Event) {
    this.dcHover.emit({node:node,  nativeElement: e })
  }
  //#endregion

  //#region onMouseDown Event
  onMouseDown(node:any ,e: Event) {
    this.dcMouseDown.emit({node:node,  nativeElement: e })
  }
  //#endregion

  //#region onMouseUp Event
  onMouseUp(node:any ,e: Event) {
    this.dcMouseUp.emit({node:node,  nativeElement: e })
  }
  //#endregion

  //#region onMouseEnter Event
  onMouseEnter(node:any ,e: Event) {
    this.dcMouseEnter.emit({node:node,  nativeElement: e })
  }
  //#endregion

  //#region onMouseOut Event
  onMouseLeave(node:any ,e: Event) {
    this.dcMouseLeave.emit({node:node,  nativeElement: e })
  }
  //#endregion
}
