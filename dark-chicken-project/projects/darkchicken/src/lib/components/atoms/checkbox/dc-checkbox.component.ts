import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckboxType } from '../../../types/dc-types';

@Component({
  selector: 'dca-checkbox',
  templateUrl: './dc-checkbox.component.html',
})
export class DCCheckboxComponent {
  //#region Inputs
  @Input() checkboxId: string | null = null
  @Input() label: string | null = null
  @Input() checked: boolean | null = null
  @Input() type: CheckboxType = 'box'
  @Input() disabled: boolean = false
  @Input() visible: boolean = true
  @Input() dcClass: string= ''
  //#endregion

  //#region Outputs
  @Output() dcValueChanged = new EventEmitter<Object>()
  //#endregion


  //#region onValueChange
  onValueChange(e: Event) {
    this.checked = (e.currentTarget as HTMLInputElement).checked
    this.dcValueChanged.emit({
      nativeElement: e,
      value: this.checked
    });
  }
  //#endregion

  //#region Outputs
  @Output() dcClick = new EventEmitter<Event>()
  @Output() dcHover = new EventEmitter<Event>()
  @Output() dcMouseUp = new EventEmitter<Event>()
  @Output() dcMouseDown = new EventEmitter<Event>()
  @Output() dcMouseLeave = new EventEmitter<Event>()
  @Output() dcMouseEnter = new EventEmitter<Event>()
  @Output() dcDoubleClick = new EventEmitter<Event>()
  //#endregion

  //#region onDoubleClick Event
  onDoubleClick(e: Event) {
    this.dcDoubleClick.emit(e)
  }
  //#endregion

  //#region onClick Event
  onClick(e: Event) {
    this.dcClick.emit(e)
  }
  //#endregion

  //#region onHover Event
  onHover(e: Event) {
    this.dcHover.emit(e)
  }
  //#endregion

  //#region onMouseDown Event
  onMouseDown(e: Event) {
    this.dcMouseDown.emit(e)
  }
  //#endregion

  //#region onMouseUp Event
  onMouseUp(e: Event) {
    this.dcMouseUp.emit(e)
  }
  //#endregion

  //#region onMouseEnter Event
  onMouseEnter(e: Event) {
    this.dcMouseEnter.emit(e)
  }
  //#endregion

  //#region onMouseOut Event
  onMouseLeave(e: Event) {
    this.dcMouseLeave.emit(e)
  }
  //#endregion
}
