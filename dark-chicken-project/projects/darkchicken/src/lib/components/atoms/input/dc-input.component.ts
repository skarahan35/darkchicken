import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { validationRules } from '../../../models/dc-models.model';
import { LanguageService } from '../../../services/language.service';
import { InputType } from '../../../types/dc-types';
@Component({
  selector: 'dca-input',
  templateUrl: 'dc-input.component.html',
})
export class DCInputComponent implements AfterViewInit {
  //#region Inputs
  @Input() placeholder: string | null = null;
  @Input() label: string | null = null;
  @Input() type: InputType = 'text';
  @Input() value: any = null;
  @Input() width: string | null = null;
  @Input() height: string | null = null;
  @Input() validationRules?: validationRules[] | null = null;
  @Input() readonly?: boolean = false;
  @Input() disabled: boolean | null = null;
  @Input() visible: boolean = true;
  @Input() dcClass: string = '';
  @Input() inputId: string | null = null
  //#endregion

  //#region Outputs
  @Output() dcValueChanged = new EventEmitter<Object>();
  @Output() dcFocusOut = new EventEmitter<Object>();
  @Output() dcFocusIn = new EventEmitter<Object>();
  @Output() dcValidating = new EventEmitter<Object>();
  @Output() dcValidated = new EventEmitter<Object>();
  @Output() dcClick = new EventEmitter<Event>()
  @Output() dcHover = new EventEmitter<Event>()
  @Output() dcMouseUp = new EventEmitter<Event>()
  @Output() dcMouseDown = new EventEmitter<Event>()
  @Output() dcMouseLeave = new EventEmitter<Event>()
  @Output() dcMouseEnter = new EventEmitter<Event>()
  @Output() dcDoubleClick = new EventEmitter<Event>()
  @Output() dcKeyUp = new EventEmitter<Object>()
  //#endregion
  @ViewChild("dcaInput") inputElementRef: ElementRef<HTMLInputElement>


  //#region Variables
  previousValue: string | null = null;

  _isValid: boolean = false

  get isValid() {
    if (this.validationRules && this.validationRules.length > 0) {
      return this._isValid
    }
    return true
  }

  set isValid(val: boolean) {
    this._isValid = val
  }

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

  constructor(private languageService: LanguageService) { }

  ngAfterViewInit(): void {
    this.previousValue = this.value;
    this.checkValidation()
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
    this.checkValidation(); //checking the validation 
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

  //#region onValidating
  checkValidation() {
    this.dcValidating.emit({
      nativeElememt: this.inputElementRef.nativeElement,
      validationRules: this.validationRules,
      value: (this.inputElementRef.nativeElement as HTMLInputElement).value,
    })
    let validity = (this.inputElementRef.nativeElement as HTMLInputElement).validity;
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
        this.languageService.getTranslation('invalidInput').subscribe(message => {
          this.validationMessage = message
        })
      }
    } else {
      this.isValid = true
      this.validationMessage = null;
    }
    this.dcValidated.emit({
      nativeElement: this.inputElementRef.nativeElement,
      isValid: this.isValid,
      value: (this.inputElementRef.nativeElement as HTMLInputElement).value
    })

  }
  //#endregion

  //#region onKeyUp Event
  onKeyUp(e: Event) {
    this.dcKeyUp.emit({
      nativeElement: e,
      value: (e.currentTarget as HTMLInputElement).value
    })
  }
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
