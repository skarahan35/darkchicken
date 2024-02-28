import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastCloseButtonPositionType, ToastPositionType, ToastType } from '../../../types/dc-types';

@Component({
  selector: 'dca-toast',
  templateUrl: './dc-toast.component.html',
  styleUrls: ['../../../../../assets/style.css' ,'./dc-toast.component.css']
})
export class DcToastComponent {

  @Input() content?:string
  @Input() time?:number
  @Input() position?:ToastPositionType = 'top-right'
  @Input() closeButton?:boolean = true
  @Input() closeButtonPosition?:ToastCloseButtonPositionType = 'left'
  @Input() allowTimeBar?:boolean = false
  @Input() type?:ToastType = 'success'

  @Output() dcToastOnHidden = new EventEmitter<Object>()
  public flag: boolean = true;


  toast(){
    this.flag = false
    var toastContainer:any = document.getElementById('toastContainer');
    var toast = document.createElement('div');
    toast.className = 'toast-container';
    toast.innerHTML = 'Merhaba! Bu bir toast mesajıdır.';

    // Toast'ı container'a ekle
    toastContainer.appendChild(toast);

    // // Toast'ı göster
    // setTimeout(function () {
    //   toast.classList.add('show');
    // }, 0);

    // // Belirli bir süre sonra toast'ı kapat
    // setTimeout(function () {
    //   toast.classList.remove('show');
    // }, 3000); // 3 saniye sonra toast kaybolacak

    // // Belirli bir süre sonra toast'ı DOM'dan kaldır
    // setTimeout(function () {
    //   toastContainer.removeChild(toast);
    // }, 3300); // 3.3 saniye sonra toast'ı kaldır
  }

  onHidden(e:Event){
    this.dcToastOnHidden.emit({nativeElement : e})
  }

  closeToast() {
    this.dcToastOnHidden.emit();
  }

  positionClass() {
    return `toast-container ${this.position}`;
  }

  typeClass() {
    return `toast ${this.type}`;
  }

  closeButtonPositionClass() {
    return `close-button ${this.closeButtonPosition}`;
  }
}
