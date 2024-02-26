import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckboxType } from '../../../types/dc-types';

@Component({
  selector: 'dca-checkbox',
  templateUrl: './dc-checkbox.component.html',
  styleUrls: ['../../../../../assets/style.css','./dc-checkbox.component.css']
})



export class DCCheckboxComponent {

  @Input() checkboxId?: string | null = null
  @Input() label?: string | null = null
  @Input() checked?: boolean | null = null
  @Input() type?: CheckboxType = 'box'
  @Input() disabled: boolean = false
  @Input() visible: boolean = true
  @Input() class: string = 'dca-checkbox'

  @Output() dcValueChanged = new EventEmitter<Object>()


  onValueChanged(e: Event) {
    this.checked = (e.currentTarget as HTMLInputElement).checked
    this.dcValueChanged.emit({
      nativeElement: e,
      value: this.checked
    });
  }

}
