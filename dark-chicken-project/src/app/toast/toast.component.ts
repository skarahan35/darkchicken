import { Component } from '@angular/core';
import { ToastService } from 'projects/darkchicken';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  constructor(private toastService: ToastService){}
  click(){
    this.toastService.use('warn','Hello World', 5, 'top-center')
  }
}
