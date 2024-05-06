import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dc-toolbar',
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {
  @Input() columns:any;
  @Output() onAddClick: EventEmitter<any> = new EventEmitter(); 
  @Output() onSaveClick: EventEmitter<any> = new EventEmitter();
  @Output() onGridReverse: EventEmitter<any> = new EventEmitter();
  @Output() onChangeColumns = new EventEmitter<any>();


  changeColumns(e:any){
    this.onChangeColumns.emit(e)
  }
}
