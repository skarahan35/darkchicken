import { AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { DCService } from '../../../services';


@Component({
  selector: 'dcm-dropdown',
  templateUrl: './dc-dropdown.component.html',
  styleUrls: ['./dc-dropdown.component.css', '../../../../../assets/style.css']
})
export class DcDropdownComponent {

  @Input() placeholder: string | null = "Select"
  @Input() value: string | null = null
  @Input() closeOnOutsideClick: boolean = true
  @Input() disabled: boolean | null = null
  @Input() readonly: boolean | null = null

  @Output() dcClick = new EventEmitter<Object>
  @Output() dcExpanding = new EventEmitter<Object>
  @Output() dcCollapsing = new EventEmitter<Object>

  isMenuShow: boolean = false
  id!: string

  constructor(private elementRef: ElementRef, private dcService: DCService) {
    this.id = this.dcService.generateUniqueId()
    console.log(this.id)
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
      debugger
      inputElement.focus();
    }
  }

  onDropdownFocusIn() {

    this.dcClick.emit({ elementRef: this.elementRef })
    if (!this.disabled) {
      this.dcExpanding.emit({ elementRef: this.elementRef })
      this.isMenuShow = true
    }
  }

  public closeDropdown() {
    this.dcCollapsing.emit({ elementRef: this.elementRef })
    this.isMenuShow = false
  }
}
