import { AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { DCService } from '../../../services';


@Component({
  selector: 'dcm-dropdown',
  templateUrl: './dc-dropdown.component.html'
})
export class DcDropdownComponent {

  @Input() placeholder: string | null = "Select"
  @Input() value: string | null = null
  @Input() closeOnOutsideClick: boolean = true
  @Input() disabled: boolean | null = null
  @Input() readonly: boolean | null = null
  @Input() visible: boolean = true
  @Input() dcClass: string = ''

  @Output() dcClick = new EventEmitter<Object>
  @Output() dcExpanding = new EventEmitter<Object>
  @Output() dcCollapsing = new EventEmitter<Object>

  isMenuShow: boolean = false
  id!: string

  constructor(private elementRef: ElementRef, private dcService: DCService) {
    this.id = this.dcService.generateUniqueId()
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
      this.isMenuShow = false
    }
  }
}
