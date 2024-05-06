import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableColumn } from 'projects/darkchicken/src/lib/types/table-column.type';

@Component({
  selector: 'column-search',
  templateUrl: './column-search.component.html'
})
export class ColumnSearchComponent {

  @Output() dcValueChanged = new EventEmitter<Object>
  @Input() height: number | null
  @Input() column: TableColumn

  get inputHeight(){
    return this.height==null ? null : this.height + 'px'
  }

  iconClick(e:Event){
    
  }

  valueChanged(e:any){
    e.newValue
    
  }

  keyUp(e:any){
    this.dcValueChanged.emit(e)
  }
}
