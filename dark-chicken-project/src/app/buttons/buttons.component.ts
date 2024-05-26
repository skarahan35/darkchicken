import { Component, ViewChild } from '@angular/core';
import { TabModel } from 'projects/darkchicken/src/lib/models/dc-models.model';
import { TableColumn } from 'projects/darkchicken/src/lib/types/table-column.type';
import { buttonEventsHtml, buttonEventsTs, buttonSize, buttonWithTextButton, noDecorationButton, outlinedButton, passiveButton } from 'src/assets/codes/button';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {

  @ViewChild('table1') table1:any;
  @ViewChild('table2') table2:any;

  eventRows = [
    {
      event:"dcClick",
      description:"Triggered when the mouse hovers over the element"
    },
    {
      event:"dcHover",
      description:"Triggered when the mouse button is released"
    },
    {
      event:"dcMouseUp",
      description:"Triggered when the mouse button is pressed"
    },
    {
      event:"dcMouseDown",
      description:"Triggered when the mouse leaves the element"
    },
    {
      event:"dcMouseLeave",
      description:"Triggered when the mouse leaves the element"
    },
    {
      event:"dcMouseEnter",
      description:"Triggered when the mouse enters the element"
    },
    {
      event:"dcDoubleClick",
      description:"Listens for double click events on the element"
    }
  ]
  selectedModal = null
  inputRows = [
    {
      input:"buttonText",
      description:"The text displayed on the button"
    },
    {
      input:"width",
      description:"The width of the button"
    },
    {
      input:"height",
      description:"The height of the button"
    },
    {
      input:"disabled",
      description:"Indicates if the button is disabled"
    },
    {
      input:"visible",
      description:"Indicates if the button is visible"
    },
    {
      input:"isToggle",
      description:"Indicates if the button is a toggle button"
    },
    {
      input:"dcClass",
      description:"The custom CSS class applied to the button"
    }
  ]
  
  inputColumns: TableColumn[] = [
    {
      prop: 'input',
      name: 'Input',
      dataType: 'text',
      visible: true
    },
    {
      prop: 'description',
      name: 'Description',
      dataType: 'text',
      visible:true
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


  onModalClick(e: any) {
    this.selectedModal = e

  }
  closeModal() {
    this.selectedModal = null

  }


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

  tabChange(){
    this.table1.recalculate()
    this.table2.recalculate()
  }
}
