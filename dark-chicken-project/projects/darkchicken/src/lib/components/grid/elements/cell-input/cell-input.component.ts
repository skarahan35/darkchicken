import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { TableColumn, dataType } from 'projects/darkchicken/src/lib/types/table-column.type';
import { DcDropdownComponent } from '../../../molecules/dc-dropdown/dc-dropdown.component';
import { validationRules } from '../../../../models/dc-models.model'
import { DcTreeComponent } from '../../../atoms';

@Component({
  selector: 'cell-input',
  templateUrl: './cell-input.component.html',
  host: {
    class: 'cell-input'
  }
})
export class CellInputComponent {
  @Input() rowIndex: number
  @Input() totalRowCount: number
  @Input() dataType?: dataType = 'text'
  @Input() sanitizedValue: any
  @Input() value: any
  @Input() validationRules?: validationRules[]
  @Input() isEditable?: boolean = true
  @Input() column: TableColumn
  @Input() isRemoved: boolean = false

  @Output() onCellChange: EventEmitter<any> = new EventEmitter();
  @Output() onCellValidating: EventEmitter<any> = new EventEmitter();
  @Output() onCellValidated: EventEmitter<any> = new EventEmitter();

  @ViewChild('treeComponent') treeComponent: DcTreeComponent

  get type() {
    return this.dataType != undefined ? this.dataType : 'text'
  }

  get readonly() {
    return this.isEditable != undefined ? !this.isEditable : false
  }

  get isRequired() {
    if (!this.column.validationRules || this.column.validationRules.length === 0) {
      return false;
    }

    for (const rule of this.column.validationRules) {
      if (rule.type === 'required') {
        return true;
      }
    }

    return false;
  }

  get validationMessage() {
    if (!this.column.validationRules || this.column.validationRules.length === 0) {
      return '';
    }

    if (this.isRequired) {
      for (const rule of this.column.validationRules) {
        if (rule.type === 'required') {
          return rule.message ? rule.message : '';
        }
      }
    }

    return ''
  }

  get processedValue() {
    if (this.type == 'text' || this.type == 'number' || this.type == 'date') {
      return this.value
    }
    else if (this.type == 'lookup') {
      if (this.column.lookup && this.column.lookup.dataSource) {
        if (!this.isTree) {
          let val = ''
          this.column.lookup.dataSource.forEach((data: any) => {
            if (this.column.lookup && data[this.column.lookup.valueExp] === this.value) {
              val = data[this.column.lookup.displayExp]
            }
          })
          return val
        } else {
          return this.getTreeValue()
        }
      }
    }else if(this.type == 'boolean'){
      if(this.value === true || this.value === false) return this. value
      return null

    }
  }

  get isTree() {
    let isTreePresent = false;
    this.column.lookup?.dataSource.forEach((data: any) => {
      if (data.hasOwnProperty('subItems')) {
        isTreePresent = true;
        return;
      }
    });
    return isTreePresent;
  }

  get dropdownPosition() {
    if (this.rowIndex != undefined && this.totalRowCount !=undefined) {
      if (this.totalRowCount / 2 >= this.rowIndex) {
        return 'below'
      } else {
        return 'above'
      }
    } else {
      return 'below'
    }
  }


  optionSelect(e: any, dropdown: DcDropdownComponent) {
    if (this.column.lookup) {
      this.value = e.listItem[this.column.lookup?.valueExp]
      dropdown.value = this.processedValue
      this.onCellChange.emit({ nativeElement: e.nativeElement, newValue: this.value })
    }
    dropdown.closeDropdown()
  }

  getTreeValue(): string {
    if (this.column.lookup && this.column.lookup.dataSource) {
      const data = this.column.lookup.dataSource;
      const valueExp = this.column.lookup.valueExp;
      const displayExp = this.column.lookup.displayExp;

      const findValueInDataSource = (data: any[], value: string): string => {
        let result = '';
        data.forEach(item => {
          if (item[valueExp] === value) {
            result = item[displayExp];
          } else if (item.subItems) {
            const subItemResult = findValueInDataSource(item.subItems, value);
            if (subItemResult !== '') {
              result = subItemResult;
            }
          }
        });
        return result;
      };

      return findValueInDataSource(data, this.value);
    }
    return '';
  }

  onTreeClick(e: any, treeDropdown: DcDropdownComponent) {
    if (!e.item.subItems && this.column.lookup) {
      this.value = e.item[this.column.lookup?.valueExp]
      treeDropdown.value = this.getTreeValue()
      this.onCellChange.emit({ nativeElement: e.nativeElement, newValue: this.value })
      treeDropdown.closeDropdown()
    }
  }
  dcCollapsing(){
    if(this.treeComponent){
      this.treeComponent.closeAllNodesExcept()
    }
  }

  onBooleanChange(e:any){
    this.value= e.value
    this.onCellChange.emit({ nativeElement: e.nativeElement, newValue: this.value })
  }
}
