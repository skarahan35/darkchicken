import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { DCService } from '../../../services';
import { validationRules } from '../../../models/dc-models.model';


@Component({
  selector: 'dcm-dropdown',
  templateUrl: './dc-dropdown.component.html'
})
export class DcDropdownComponent implements AfterViewInit{

  @Input() placeholder: string | null = "Select"
  @Input() value: string | null = null
  @Input() closeOnOutsideClick: boolean = true
  @Input() disabled: boolean | null = null
  @Input() readonly?: boolean = false
  @Input() visible: boolean = true
  @Input() dcClass: string = ''
  @Input() isRequired?:boolean = false
  @Input() validationMessage?:string = ''
  @Input() contentPosition: 'below' | 'above'
  @Input() width: string | null = null;
  @Input() height: string | null = null;
  
  @Output() dcClick = new EventEmitter<Object>
  @Output() dcExpanding = new EventEmitter<Object>
  @Output() dcCollapsing = new EventEmitter<Object>
  @Output() dcFocusOut = new EventEmitter<Object>();
  @Output() dcValidating = new EventEmitter<Object>();
  @Output() dcValidated = new EventEmitter<Object>();
  @Output() dcMouseEnter = new EventEmitter<Object>()
  isMenuShow: boolean = false
  id!: string
  clickedOnce:boolean=false
  get validationRule(){
    return this.isRequired ?  [{type:'required',message:this.validationMessage}] as validationRules[] : null
  }

 _isValid:boolean = false
  get isValid(){
    return this.isRequired == true ? this._isValid : true
  }

  set isValid(val:boolean){
    this._isValid = val
  }

  constructor(private elementRef: ElementRef, private dcService: DCService) {
    this.id = this.dcService.generateUniqueId()
  }
  ngAfterViewInit(): void {
    this.checkValidity(this.value)
  }


  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.closeOnOutsideClick) {
      const dropdownElement = this.elementRef.nativeElement;
      const clickedInsideDropdown = dropdownElement.contains(event.target as Node);
      if (!clickedInsideDropdown) {
        this.closeDropdown();
      }
    }
  }

  focusInput() {
    const inputElement = document.getElementById(this.id);
    if (inputElement) {
      inputElement.focus();
    }
  }

  onDropdownFocusIn() {
    this.dcClick.emit({ nativeElemet: this.elementRef.nativeElement })
    if (!this.disabled && this.isMenuShow == false) {
      this.dcExpanding.emit({ nativeElemet: this.elementRef.nativeElement })
      this.isMenuShow = true
    }
  }

  public closeDropdown() {
    if(this.isMenuShow == true){
      this.dcCollapsing.emit({ nativeElemet: this.elementRef.nativeElement })
      this.checkValidity(this.value)
      this.isMenuShow = false
    }
  }

  onFocusOut(e:any){
    setTimeout(()=>{
      this.dcFocusOut.emit(e)
      this.clickedOnce = true
    },100)
    
  }

  checkValidity(value:string | null){
    if(this.isRequired){
      if(value == '' || value ==null){
        this.isValid = false
      }else{
        this.isValid = true
      }
    }else{
      this.isValid = true
    }
  }
}
