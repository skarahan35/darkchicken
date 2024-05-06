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
  @Input() dcClass: string = ''
  @Input() isRequired?: boolean = false
  @Input() validationMessage?: string = ''
  @Input() notEqual: boolean | null = null
  //#endregion

  //#region Outputs
  @Output() dcValueChanged = new EventEmitter<Object>()
  //#endregion

  clickedOnce = false

  get isValid() {
    let tempValid = true
    if (this.isRequired) {
      if (this.checked == undefined || this.checked == null) tempValid = false
    }
    if (this.notEqual != null) {

      if (this.notEqual == true) {
        if (this.checked == true) tempValid = false
      } else {
        if (this.checked == false) tempValid = false
      }
    }
    return tempValid
  }

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
  @Output() dcFocusOut = new EventEmitter<Object>();
  @Output() dcFocusIn = new EventEmitter<Object>();
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

  //#region dcFocusOut Event
  onFocusOut(e: Event) {
    this.dcFocusOut.emit(e)
  }
  //#endregion

  //#region dcFocusIn Event
  onFocusIn(e: Event) {
    this.clickedOnce = true
    this.dcFocusIn.emit(e)
  }
  //#endregion

}
