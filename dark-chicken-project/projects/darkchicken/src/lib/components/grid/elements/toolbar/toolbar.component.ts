import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'dc-toolbar',
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {
  @Input() columns: any;
  @Input() passiveReversing: boolean = false;
  @Input() passiveSaving: boolean = false;
  @Input() allowAdding:boolean = true
  @Input() allowEditing:boolean = true
  @Input() allowSaveButton?:boolean = true;
  @Input() allowReverseButton?:boolean = true;
  @Input() allowDeleting:boolean = true
  @Input() allowGridSearch:boolean = true
  @Input() allowColumnChooser:boolean = true
  @Input() allowColumnReorder:boolean = true
  @Output() onAddClick: EventEmitter<any> = new EventEmitter();
  @Output() onSaveClick: EventEmitter<any> = new EventEmitter();
  @Output() onGridReverse: EventEmitter<any> = new EventEmitter();
  @Output() onChangeColumns = new EventEmitter<any>();


  changeColumns(e: any) {
    this.onChangeColumns.emit(e)
  }
  addClick(e: any) {
    this.onAddClick.emit(e)
  }
  gridReverse(e: any) {
    if(this.passiveReversing != true){
      this.onGridReverse.emit(e)
    }
  }
  saveClick(e: any) {
    if(this.passiveSaving != true){
      this.onSaveClick.emit(e)
    }
  }


}
