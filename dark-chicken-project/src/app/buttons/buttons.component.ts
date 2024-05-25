import { Component } from '@angular/core';
import { TabModel } from 'projects/darkchicken/src/lib/models/dc-models.model';
import { TableColumn } from 'projects/darkchicken/src/lib/types/table-column.type';
import { buttonEventsHtml, buttonEventsTs, buttonSize, buttonWithTextButton, noDecorationButton, outlinedButton, passiveButton } from 'src/assets/codes/button';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  selectedModal = null


  onModalClick(e: any) {
    this.selectedModal = e

  }
  closeModal() {
    this.selectedModal = null

  }


  tabs: TabModel[] = [
    {tabId:'1',
      tabTitle:'Description'
    },
    {tabId:'2',
      tabTitle:'Code'
    }
  ]



  mainTabs: TabModel[] = [
    {
      tabId: 'overview',
      tabTitle: 'Overview',
    },
    {
      tabId: 'api',
      tabTitle: 'API',
      isActive:true
    }, 
    {
      tabId: 'examples',
      tabTitle: 'Examples',
    }
  ]

  apiTableColumns1:TableColumn[]=[
    {
      prop:'input',
      name:'Inputs',
      sortable:false,
      isEditable:false
    },
    {
      prop:'des',
      name:'Description',
      sortable:false,
      isEditable:false
    }
  ]

  apiTableRows1:any=[
    {
      input:"input1",
      des:"des1"
    },
    {
      input:"input2",
      des:"des2"
    },
    {
      input:"input3",
      des:"des3"
    },
    {
      input:"input4",
      des:"des4"
    },
    {
      input:"input5",
      des:"des5"
    },
    {
      input:"input6",
      des:"des6"
    },
    {
      input:"input7",
      des:"des7"
    }
  ]






















  codeTabs: TabModel[] = [
    {
      tabId: 'html',
      tabTitle: 'HTML',
      tabIcon: 'html5',
    },
    {
      tabId: 'ts',
      tabTitle: 'TS',
      tabIcon: 'angular',
    }
  ]
  noDecorationButton = noDecorationButton
  buttonWithTextButton = buttonWithTextButton
  outlinedButton = outlinedButton
  passiveButton = passiveButton
  buttonEventsHtml = buttonEventsHtml
  buttonEventsTs = buttonEventsTs
  buttonSize = buttonSize

  dcClick(e: any) {
    console.log({ dcClick: e })
  }
  dcHover(e: any) {
    console.log({ dcHover: e })
  }
  dcMouseUp(e: any) {
    console.log({ dcMouseUp: e })
  }
  dcMouseDown(e: any) {
    console.log({ dcMouseDown: e })
  }
  dcMouseOut(e: any) {
    console.log({ dcMouseOut: e })
  }
  dcMouseEnter(e: any) {
    console.log({ dcMouseEnter: e })
  }
  dcDoubleClick(e: any) {
    console.log({ dcDoubleClick: e })
  }
}
