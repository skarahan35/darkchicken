import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BreadCrumbModel } from '../../../models/dc-models.model';

@Component({
  selector: 'dca-bread-crumb',
  templateUrl: 'dc-bread-crumb.component.html'
})
export class DCBreadCrumbComponent {
  //#region Inputs
  @Input() crumbList!: BreadCrumbModel[]
  @Input() visible: boolean = true
  @Input() dcClass: string = ''
  //#endregion

  //#region Outputs
  @Output() dcClick = new EventEmitter<Object>()
  @Output() dcHover = new EventEmitter<Object>()
  @Output() dcMouseUp = new EventEmitter<Object>()
  @Output() dcMouseDown = new EventEmitter<Object>()
  @Output() dcMouseLeave = new EventEmitter<Object>()
  @Output() dcMouseEnter = new EventEmitter<Object>()
  @Output() dcDoubleClick = new EventEmitter<Object>()
  //#endregion

  //#region onDoubleClick Event
  onDoubleClick(e: Event, crumbGroup: HTMLDivElement, crumb: BreadCrumbModel) {
    this.dcDoubleClick.emit({ nativeElement: e, crumbGroup: { nativeElement: crumbGroup, crumbList: this.crumbList }, crumb: crumb })
  }
  //#endregion

  //#region onClick Event
  onClick(e: Event, crumbGroup: HTMLDivElement, crumb: BreadCrumbModel) {
    this.dcClick.emit({ nativeElement: e, crumbGroup: { nativeElement: crumbGroup, crumbList: this.crumbList }, crumb: crumb })
  }
  //#endregion

  //#region onHover Event
  onHover(e: Event, crumbGroup: HTMLDivElement, crumb: BreadCrumbModel) {
    this.dcHover.emit({ nativeElement: e, crumbGroup: { nativeElement: crumbGroup, crumbList: this.crumbList }, crumb: crumb })
  }
  //#endregion

  //#region onMouseDown Event
  onMouseDown(e: Event, crumbGroup: HTMLDivElement, crumb: BreadCrumbModel) {
    this.dcMouseDown.emit({ nativeElement: e, crumbGroup: { nativeElement: crumbGroup, crumbList: this.crumbList }, crumb: crumb })
  }
  //#endregion

  //#region onMouseUp Event
  onMouseUp(e: Event, crumbGroup: HTMLDivElement, crumb: BreadCrumbModel) {
    this.dcMouseUp.emit({ nativeElement: e, crumbGroup: { nativeElement: crumbGroup, crumbList: this.crumbList }, crumb: crumb })
  }
  //#endregion

  //#region onMouseEnter Event
  onMouseEnter(e: Event, crumbGroup: HTMLDivElement, crumb: BreadCrumbModel) {
    this.dcMouseEnter.emit({ nativeElement: e, crumbGroup: { nativeElement: crumbGroup, crumbList: this.crumbList }, crumb: crumb })
  }
  //#endregion

  //#region onMouseOut Event
  onMouseLeave(e: Event, crumbGroup: HTMLDivElement, crumb: BreadCrumbModel) {
    this.dcMouseLeave.emit({ nativeElement: e, crumbGroup: { nativeElement: crumbGroup, crumbList: this.crumbList }, crumb: crumb })
  }
  //#endregion
}
