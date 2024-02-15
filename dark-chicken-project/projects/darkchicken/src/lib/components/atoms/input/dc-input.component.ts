import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dca-input',
  templateUrl: 'dc-input.component.html',
  styleUrls: ['../../assets/style.css']
})
export class DCInputComponent {
    @Input() placeholder:String = ''

    @Output() dcValueChanged = new EventEmitter<Object>()

    onValueChange(e:Event){
        let event = {
          nativeElement : e,
          value: (e.currentTarget as HTMLInputElement).value
        }
        this.dcValueChanged.emit(event)
    }

}