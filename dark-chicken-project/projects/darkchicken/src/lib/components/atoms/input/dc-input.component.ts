import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

import { InputValidationRulesModel } from '../../../models/input-validation-rules.model';
import { LanguageService } from '../../../services/language.service';
import { InputType } from '../../../types/dc-types';
@Component({
  selector: 'dca-input',
  templateUrl: 'dc-input.component.html',
  styleUrls: ['../../../../../assets/style.css', 'dc-input.component.css'],
})
export class DCInputComponent implements AfterViewInit {
  //#region Inputs
  @Input() placeholder?: string | null = null;
  @Input() label: string | null = null;
  @Input() type: InputType = 'text';
  @Input() value: any = null;
  @Input() width: string | null = null;
  @Input() height: string | null = null;
  @Input() validationRules: InputValidationRulesModel[] | null = null;
  @Input() readonly: boolean = false;
  @Input() visible: boolean = true;
  @Input() class: string = 'dca-input';

  //#endregion

  //#region Outputs
  @Output() dcValueChanged = new EventEmitter<Object>();
  @Output() dcFocusOut = new EventEmitter<Object>();
  @Output() dcFocusIn = new EventEmitter<Object>();
  @Output() dcValidating = new EventEmitter<Object>();
  @Output() dcValidated = new EventEmitter<Object>();
  //#endregion

  //#region Variables
  previousValue: string | null = null;
  isValid: boolean = true;

  //#region Validation Variables
  get isRequired() {
    return (
      this.validationRules?.some((rule) => rule.type === 'required') ?? false
    );
  }

  get minValue() {
    const minRule = this.validationRules?.find((rule) => rule.type === 'min');
    return minRule ? minRule.value : null;
  }

  get maxValue() {
    const maxRule = this.validationRules?.find((rule) => rule.type === 'max');
    return maxRule ? maxRule.value : null;
  }

  get minLengthValue() {
    const minLengthRule = this.validationRules?.find(
      (rule) => rule.type === 'minLength'
    );
    return minLengthRule ? minLengthRule.value : null;
  }

  get maxLengthValue() {
    const maxLengthRule = this.validationRules?.find(
      (rule) => rule.type === 'maxLength'
    );
    return maxLengthRule ? maxLengthRule.value : null;
  }

  get pattern() {
    const patternRule = this.validationRules?.find(
      (rule) => rule.type === 'regEx'
    );
    return patternRule ? patternRule.pattern : null;
  }

  clickedOnce: boolean = false;
  validationMessage?: string | null = null;
  //#endregion

  //#endregion

  constructor(private languageService: LanguageService) {

  }

  ngAfterViewInit(): void {
    this.previousValue = this.value;
  }

  //#region Outputs methots
  onFocusIn(e: Event) {
    this.clickedOnce = true;
    this.dcFocusIn.emit({
      currentValue: (e.currentTarget as HTMLInputElement).value,
      nativeElement: e,
    });
  }

  onFocusOut(e: Event) {
    this.checkValidation(e); //checking the validation 
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

  //#region onValidation
  checkValidation(e: Event) {
    this.dcValidating.emit({
      nativeElememt: e,
      validationRules: this.validationRules
    })
    let validity = (e.currentTarget as HTMLInputElement).validity;
    if (!validity.valid) {
      this.isValid = false
      if (validity.valueMissing) {
        this.validationMessage = this.validationRules?.find(
          (rule) => rule.type == 'required'
        )?.message;
      } else if (validity.tooShort) {
        this.validationMessage = this.validationRules?.find(
          (rule) => rule.type == 'minLength'
        )?.message;
      } else if (validity.tooLong) {
        this.validationMessage = this.validationRules?.find(
          (rule) => rule.type == 'maxLength'
        )?.message;
      } else if (validity.rangeUnderflow) {
        this.validationMessage = this.validationRules?.find(
          (rule) => rule.type == 'min'
        )?.message;
      } else if (validity.rangeOverflow) {
        this.validationMessage = this.validationRules?.find(
          (rule) => rule.type == 'max'
        )?.message;
      } else if (validity.patternMismatch) {
        this.validationMessage = this.validationRules?.find(
          (rule) => rule.type == 'regEx'
        )?.message;
      } else {
        this.languageService.getTranslation('invalidInput').subscribe(message=>{
          this.validationMessage = message
        })
      }
    } else {
      this.isValid = false
      this.validationMessage = null;
    }
    this.dcValidated.emit({
      nativeElement: e,
      isValid: this.isValid
    })

  }
  //#endregion
}
