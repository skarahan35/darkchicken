import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dca-list',
  templateUrl: './dc-list.component.html',
  styleUrls: ['./dc-list.component.css','../../../../../assets/style.css'],
  encapsulation: ViewEncapsulation.None
})
export class DcListComponent {
  @Input() dataSource: any[] = []
  @Input() valueExp: string | null = null
  @Input() displayExp: string | null = null
  @Input() visible: boolean = true
  @Input() class: string = ''


  @Output() dcClick = new EventEmitter<Object>()
  @Output() dcHover = new EventEmitter<Object>()
  @Output() dcMouseUp = new EventEmitter<Object>()
  @Output() dcMouseDown = new EventEmitter<Object>()
  @Output() dcMouseLeave = new EventEmitter<Object>()
  @Output() dcMouseEnter = new EventEmitter<Object>()
  @Output() dcDoubleClick = new EventEmitter<Object>()

  
//#region onDoubleClick Event
onDoubleClick(e: Event, item:any, dataField:string, value:any) {
  this.dcDoubleClick.emit({'listItem':item, 'nativeElement': e, [dataField] : value })
}
//#endregion

//#region onClick Event
onClick(e: Event, item:any, dataField:string, value:any) {
  this.dcClick.emit({'listItem':item, 'nativeElement': e, [dataField] : value })
}
//#endregion

//#region onHover Event
onHover(e: Event, item:any, dataField:string, value:any) {
  this.dcHover.emit({'listItem':item, 'nativeElement': e, [dataField] : value })
}
//#endregion

//#region onMouseDown Event
onMouseDown(e: Event, item:any, dataField:string, value:any) {
  this.dcMouseDown.emit({'listItem':item, 'nativeElement': e, [dataField] : value })
}
//#endregion

//#region onMouseUp Event
onMouseUp(e: Event, item:any, dataField:string, value:any) {
  this.dcMouseUp.emit({'listItem':item, 'nativeElement': e, [dataField] : value })
}
//#endregion

//#region onMouseEnter Event
onMouseEnter(e: Event, item:any, dataField:string, value:any) {
  this.dcMouseEnter.emit({'listItem':item, 'nativeElement': e, [dataField] : value })
}
//#endregion

//#region onMouseOut Event
onMouseLeave(e: Event, item:any, dataField:string, value:any) {
  this.dcMouseLeave.emit({'listItem':item, 'nativeElement': e, [dataField] : value })
}
//#endregion

}
