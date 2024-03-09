import { Component } from '@angular/core';
import { DcToastService } from 'dc-toast-ng';
import { ToastModel } from 'dc-toast-ng/model/models.model';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  DCToast:ToastModel = {
    content: 'Dark Chicken Toast NG',
    time: 5,
    position: 'top-right',
    closeWithHover: true,
    closeButtonPosition: 'right',
    type: 'success',
    allowTimeBar: true,
    showCloseButton: true
  };
  constructor(private DcToastService: DcToastService) {
    this.DcToastService.onHidden().subscribe((res)=> {
      console.log(res)
    })
  }

  showToast() {
    this.DcToastService.create(this.DCToast)
  }
}
