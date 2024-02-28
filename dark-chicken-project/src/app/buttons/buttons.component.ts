import { Component } from '@angular/core';
import { ToastService } from 'projects/darkchicken';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {

constructor(private toastService:ToastService){
  
}

dcClick(e:any){
  console.log("dcClick")
}
dcHover(e:any){
  console.log("dcHover")
}
dcMouseUp(e:any){
  console.log("dcMouseUp")
}
dcMouseDown(e:any){
  console.log("dcMouseDown")
}
dcMouseOut(e:any){
  console.log("dcMouseOut")
}
dcMouseEnter(e:any){
  console.log("dcMouseEnter")
}
dcDoubleClick(e:any){
  console.log("dcDoubleClick")
}
}
