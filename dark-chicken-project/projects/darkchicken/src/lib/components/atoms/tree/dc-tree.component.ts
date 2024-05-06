import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TreeModel } from '../../../models/dc-models.model';

@Component({
  selector: 'dca-tree',
  templateUrl: './dc-tree.component.html'
})
export class DcTreeComponent implements OnChanges{

  @Input() treeData?: TreeModel[] | any[];
  @Input() visible: boolean = true
  @Input() dcClass: string = ''
  @Input() expandOnlyIcon: boolean = false

  @Output() dcExpanding = new EventEmitter<Object>();
  @Output() dcCollapsing = new EventEmitter<Object>();
  @Output() dcClick = new EventEmitter<Object>()
  @Output() dcHover = new EventEmitter<Object>()
  @Output() dcMouseUp = new EventEmitter<Object>()
  @Output() dcMouseDown = new EventEmitter<Object>()
  @Output() dcMouseLeave = new EventEmitter<Object>()
  @Output() dcMouseEnter = new EventEmitter<Object>()
  @Output() dcDoubleClick = new EventEmitter<Object>()

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['treeData']) {
      this.treeData?.forEach((item: any) => {

        item.expanded = false
      })
    }
  }

  closeAllNodesExcept(selectedNode?: any) {
    this.treeData?.forEach((node: any) => {
      // Seçili node dışındaki tüm nodları kapalı konuma getir
      if (node !== selectedNode) {
        node.expanded = false;
      }
    });
  }
  
  changeOpen(node: any, event: Event) {
    if (!this.expandOnlyIcon) {
      this.dcClick.emit({ item: node, nativeElement: event })
      
      this.closeAllNodesExcept(node);

      node.expanded = !node.expanded;
      if (node.expanded) {
        this.dcExpanding.emit({ item: node, nativeElement: event });
      } else {
        this.dcCollapsing.emit({ item: node, nativeElement: event });
      }
    } else {
      if ((event.currentTarget as HTMLElement).classList.contains('chevron-icons')) {
        node.expanded = !node.expanded;
        if (node.expanded) {
          this.dcExpanding.emit({ item: node, nativeElement: event });
        } else {
          this.dcCollapsing.emit({ item: node, nativeElement: event });
        }
      }else{
        this.dcClick.emit({ item: node, nativeElement: event })
      }
    }
  }

  changeOpenSubItems(node: any) {
    if(!this.expandOnlyIcon){
      this.dcClick.emit(node)

      if (node.expanded) {
        this.dcExpanding.emit(node);
      } else {
        this.dcCollapsing.emit(node);
      }
    }else{
      if((node.nativeElement.currentTarget as HTMLElement).classList.contains('chevron-icons')){
        if (node.expanded) {
          this.dcExpanding.emit(node);
        } else {
          this.dcCollapsing.emit(node);
        }
      }else{
        this.dcClick.emit(node)
      }
    }
  }

  //#region onDoubleClick Event
  onDoubleClick(node: any, e: Event) {
    this.dcDoubleClick.emit({ node: node, nativeElement: e })
  }
  //#endregion

  //#region onClick Event
  onClick(node: any, e: Event) {
    this.dcClick.emit({ node: node, nativeElement: e })
  }
  //#endregion

  //#region onHover Event
  onHover(node: any, e: Event) {
    this.dcHover.emit({ node: node, nativeElement: e })
  }
  //#endregion

  //#region onMouseDown Event
  onMouseDown(node: any, e: Event) {
    this.dcMouseDown.emit({ node: node, nativeElement: e })
  }
  //#endregion

  //#region onMouseUp Event
  onMouseUp(node: any, e: Event) {
    this.dcMouseUp.emit({ node: node, nativeElement: e })
  }
  //#endregion

  //#region onMouseEnter Event
  onMouseEnter(node: any, e: Event) {
    this.dcMouseEnter.emit({ node: node, nativeElement: e })
  }
  //#endregion

  //#region onMouseOut Event
  onMouseLeave(node: any, e: Event) {
    this.dcMouseLeave.emit({ node: node, nativeElement: e })
  }
  //#endregion
}
