import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { InputType } from '../../assets/types/dc-atom-input-types';
import { InputValidationRulesModel } from '../../assets/models/input-validation-rules.model';

@Component({
  selector: 'dca-input',
  templateUrl: 'dc-input.component.html',
  styleUrls: ['../../assets/style.css', 'dc-input.component.css'],
})
export class DCInputComponent implements AfterViewInit {
  //#region Inputs
  @Input() placeholder?: string | null = null;
  @Input() label: string | null = null;
  @Input() type: InputType = 'text';
  @Input() value: any = null;
  @Input() width?: string = '80';
  @Input() height?: string = '100';
  @Input() validationRules: InputValidationRulesModel | null = null;
  @Input() readonly: boolean = false;
  @Input() visible: boolean = true;
  @Input() class: string = 'dca-input';
  //#endregion

  //#region Outputs
  @Output() dcValueChanged = new EventEmitter<Object>();
  @Output() dcFocusOut = new EventEmitter<Object>();
  @Output() dcFocusIn = new EventEmitter<Object>();
  //#endregion

  //#region Variables
  previousValue: string | null = null;
  //#endregion

  ngAfterViewInit(): void {
    this.previousValue = this.value;
  }

  //#region Outputs methots
  onFocusIn(e: Event) {
    this.dcFocusIn.emit({
      currentValue: (e.currentTarget as HTMLInputElement).value,
      nativeElement: e,
    });
  }

  onFocusOut(e: Event) {
    this.dcFocusOut.emit({
      currentValue: (e.currentTarget as HTMLInputElement).value,
      nativeElement: e,
    });
  }

  onValueChange(e: Event) {
    this.dcValueChanged.emit({
      newValue: (e.currentTarget as HTMLInputElement).value,
      oldValue: this.previousValue,
      nativeElement: e,
    });

    this.previousValue = (e.currentTarget as HTMLInputElement).value;
  }
  //#endregion

  initValidationRules() {}
}
