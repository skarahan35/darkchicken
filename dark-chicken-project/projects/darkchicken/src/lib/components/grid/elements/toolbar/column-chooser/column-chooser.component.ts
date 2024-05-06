import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'column-chooser',
  templateUrl: './column-chooser.component.html',
})
export class ColumnChooserComponent {
  
  @Input() set columns(val:any){
    this._initialColumns = JSON.parse(JSON.stringify(val))
    this._columns = val
  }
  @Output() changeColumns:any = new EventEmitter<any>();

  columnVisible:any = {}
  showColumnChooser = false
  _columns:any;
  _initialColumns:any;
  sendButtonDisabled:boolean = false
  iconClick(){
    this.showColumnChooser = !this.showColumnChooser
  }

  columnVisibleChange(e:any, prop:string){
    let flag = false
    this.columnVisible[prop] = e.value

    for(let keys in this.columnVisible){
      for(let key in this._columns){
        if(this._columns[key].prop == keys){
          this._columns[key].visible = this.columnVisible[keys]
        }
      }
    }

    this._columns.forEach((item:any) => {
      if(item.visible == true){
        flag = true
      }
    })

    flag ? this.sendButtonDisabled = false : this.sendButtonDisabled = true
  }
  sendColumns(){
    this.changeColumns.emit(this._columns)
    this.showColumnChooser = !this.showColumnChooser
  }

  clickCancelButton(){
    this.columnVisible = {}
    this._columns = JSON.parse(JSON.stringify(this._initialColumns)) 
    this.showColumnChooser = !this.showColumnChooser
  }
}
