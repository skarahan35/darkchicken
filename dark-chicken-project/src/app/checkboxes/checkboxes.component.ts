import { Component,ViewChild } from '@angular/core';
import { TabModel } from 'projects/darkchicken/src/lib/models/dc-models.model';
import { checkboxEventHTML, checkboxEventTS, checkboxPassiveCodeHTML, checkboxPassiveCodeTS, checkboxTypes, noDecorationCheckbox } from 'src/assets/codes/checkbox';
import { TableColumn } from 'projects/darkchicken/src/lib/types/table-column.type';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.css']
})
export class CheckboxesComponent {
  @ViewChild('table1') table1:any;
  @ViewChild('table2') table2:any;
  selectedModal = null

  eventRows = [
    {
      event:"dcClick",
      description:"Emits an event when the Checkbox is clicked. Useful for handling click events."
    },
    {
      event:"dcHover",
      description:"Emits an event when the mouse hovers over the Checkbox. Useful for handling hover events."
    },
    {
      event:"dcMouseUp",
      description:"Emits an event when the mouse button is released over the Checkbox. Useful for handling mouse up events."
    },
    {
      event:"dcMouseDown",
      description:"Emits an event when the mouse button is pressed down on the Checkbox. Useful for handling mouse down events."
    },
    {
      event:"dcMouseLeave",
      description:"Emits an event when the mouse leaves the Checkbox. Useful for handling mouse leave events."
    },
    {
      event:"dcMouseEnter",
      description:"Emits an event when the mouse enters the Checkbox. Useful for handling mouse enter events."
    },
    {
      event:"dcDoubleClick",
      description:"Emits an event when the Checkbox is double-clicked. Useful for handling double-click events."
    },
    {
      event:"dcFocusOut",
      description:"Emits an event when the Checkbox loses focus. Useful for handling blur events."
    },
    {
      event:"dcFocusIn",
      description:"Emits an event when the Checkbox gains focus. Useful for handling focus events."
    }
  ]
  
  inputRows = [
    {
      input:"checkboxId",
      description:"Assigns a unique identifier for the Checkbox component. This identifier is used as the HTML id attribute of the component."
    },
    {
      input:"label",
      description:"Specifies the label to be displayed next to the Checkbox component. It indicates what the checkbox represents to the user."
    },
    {
      input:"checked",
      description:"Sets the initial state of the Checkbox. If true, it starts as checked; if false, it starts as unchecked."
    },
    {
      input:"type",
      description:"Determines the style type of the Checkbox. By default, it is 'box'. Other values can be used for different styles (e.g., 'switch')."
    },
    {
      input:"disabled",
      description:"Specifies whether the Checkbox is disabled. If true, the Checkbox is not interactive."
    },
    {
      input:"visible",
      description:"Determines the visibility of the Checkbox. If true, it is visible; if false, it is hidden."
    },
    {
      input:"dcClass",
      description:"Adds custom CSS classes to the Checkbox component for styling purposes."
    },
    {
      input:"isRequired",
      description:"Indicates whether the Checkbox is required. If true, it is mandatory to check it in the form."
    },
    {
      input:"validationMessage",
      description:"Specifies the validation message to be displayed when the Checkbox is required but not checked."
    },
    {
      input:"notEqual",
      description:"Specifies the value that the Checkbox should not be equal to."
    }
  ]
  
  inputColumns: TableColumn[] = [
    {
      prop: 'input',
      name: 'Input',
      dataType: 'text',
      visible: true,
      width:10
    },
    {
      prop: 'description',
      name: 'Description',
      dataType: 'text',
      visible:true,
      width:400
    }
  ]
  eventColumns: TableColumn[] =[
    {
      prop:'event',
      name:'Event',
      dataType:'text',
      visible:true
    },
    {
      prop: 'description',
      name: 'Description',
      dataType: 'text',
      visible:true
    }
  ]


  tabs: TabModel[] = [
    {tabId:'1',
      tabTitle:'',
      tabIcon:"html5"
    },
    {tabId:'2',
      tabTitle:'',
      tabIcon:"angular"
    }
  ]

  tabProperties: TabModel[] = [
    {tabId:'1',
      tabTitle:'Inputs',
    },
    {tabId:'2',
      tabTitle:'Events',
    }
  ]

  noDecorationCheckbox=noDecorationCheckbox
  checkboxTypes=checkboxTypes
  checkboxPassiveCodeHTML=checkboxPassiveCodeHTML
  checkboxPassiveCodeTS=checkboxPassiveCodeTS
  checkboxEventHTML=checkboxEventHTML
  checkboxEventTS=checkboxEventTS
  visibleCheckbox=false

  dcClick(e:any){
    console.log({dcClick:e})
  }
  dcHover(e:any){
    console.log({dcHover:e})
  }
  dcMouseUp(e:any){
    console.log({dcMouseUp:e})
  }
  dcMouseDown(e:any){
    console.log({dcMouseDown:e})
  }
  dcMouseLeave(e:any){
    console.log({dcMouseLeave:e})
  }
  dcMouseEnter(e:any){
    console.log({dcMouseEnter:e})
  }
  dcDoubleClick(e:any){
    console.log({dcDoubleClick:e})
  }
  dcValueChanged(e:any){
    console.log({dcValueChanged:e})
  }
  onModalClick(e: any) {
    this.selectedModal = e

  }
  dcMouseOut(e: any) {
    console.log({ dcMouseOut: e })
  }

  closeModal() {
    this.selectedModal = null

  }
  
  tabChange(){
    // this.table1.recalculate()
    this.table2.recalculate()
  }
}
