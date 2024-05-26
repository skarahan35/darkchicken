import { Component,ViewChild } from '@angular/core';
import { TabModel } from 'projects/darkchicken/src/lib/models/dc-models.model';
import { noDecorationSpinner, spinnerActive, spinnerTypes } from 'src/assets/codes/spinner';
import { TableColumn } from 'projects/darkchicken/src/lib/types/table-column.type';

@Component({
  selector: 'app-spinners',
  templateUrl: './spinners.component.html',
  styleUrls: ['./spinners.component.css']
})
export class SpinnersComponent {
  @ViewChild('table1') table1:any;
  @ViewChild('table2') table2:any;

  
  selectedModal = null
  inputRows = [
    {
      input:"boolean",
      description:"This property controls the spinner's visibility. When true, the spinner is active and visible; when false, it is hidden."
    },
    {
      input:"string",
      description:"This property sets the spinner's style. The default is 'dca-spinner-primary', but it can be changed to other styles like 'dca-spinner-secondary', 'dca-spinner-success', etc."
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
      width:900
    }
  ]
  
  codeTabs:TabModel[] = [
    {
      tabId:'html',
      tabTitle:'HTML',
      tabIcon:'html5',
    },
    {
      tabId:'ts',
      tabTitle:'TS',
      tabIcon:'angular',
    }
  ]
  noDecorationSpinner=noDecorationSpinner
  spinnerTypes=spinnerTypes
  spinnerActive=spinnerActive
  activity = true

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

  closeModal() {
    this.selectedModal = null

  }

  onModalClick(e: any) {
    this.selectedModal = e

  }
  tabChange(){
    this.table1.recalculate()
    this.table2.recalculate()
  }
}


