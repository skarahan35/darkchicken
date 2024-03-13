import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dca-button',
  templateUrl: 'dc-button.component.html',
  styleUrls: ['../../../../../assets/style.css', 'dc-button.component.css']
})
export class DCButtonComponent {

  //#region Inputs
  @Input() buttonText?: string = undefined
  @Input() width?: string = undefined
  @Input() height?: string = undefined
  @Input() disabled: boolean = false
  @Input() visible: boolean = true
  @Input() isToggle: boolean = false
  @Input() class: string = ''
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
  onDoubleClick(e: Event) {
    this.dcDoubleClick.emit({ 'nativeElement': e })
  }
  //#endregion

  //#region onClick Event
  onClick(e: Event) {
    this.dcClick.emit({ 'nativeElement': e })
  }
  //#endregion

  //#region onHover Event
  onHover(e: Event) {
    this.dcHover.emit({ 'nativeElement': e })
  }
  //#endregion

  //#region onMouseDown Event
  onMouseDown(e: Event) {
    this.dcMouseDown.emit({ 'nativeElement': e })
  }
  //#endregion

  //#region onMouseUp Event
  onMouseUp(e: Event) {
    this.dcMouseUp.emit({ 'nativeElement': e })
  }
  //#endregion

  //#region onMouseEnter Event
  onMouseEnter(e: Event) {
    this.dcMouseEnter.emit({ 'nativeElement': e })
  }
  //#endregion

  //#region onMouseOut Event
  onMouseLeave(e: Event) {
    this.dcMouseLeave.emit({ 'nativeElement': e })
  }
  //#endregion

}
