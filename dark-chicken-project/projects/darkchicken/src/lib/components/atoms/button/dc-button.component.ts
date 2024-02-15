import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dca-button',
  templateUrl: 'dc-button.component.html',
  styleUrls: ['../../assets/style.css']
})
export class DCButtonComponent {

    @Input() buttonText:String = '' 

    @Output() dcClick = new EventEmitter<Event>()

    onClick(e:Event){
        this.dcClick.emit(e);
    }

}
