import { Component } from '@angular/core';

@Component({
  selector: 'app-spinners',
  templateUrl: './spinners.component.html',
  styleUrls: ['./spinners.component.css']
})
export class SpinnersComponent {
  active:boolean = true

  click(e:any){
    this.active = !this.active
  }
}
