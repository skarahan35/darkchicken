import { Component, ViewChild } from '@angular/core';
import { TableColumn } from 'projects/darkchicken';
import { TabModel } from 'projects/darkchicken/src/lib/models/dc-models.model';
import { listHTML, listTS } from 'src/assets/codes/list';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent {

  @ViewChild('table1') table1:any;
  @ViewChild('table2') table2:any;
  selectedModal = null

  eventRows = [
    {
      "event": "dcClick",
      "description": "Emits an event when a list item is clicked. Useful for handling click events."
    },
    {
      "event": "dcHover",
      "description": "Emits an event when the mouse hovers over a list item. Useful for handling hover events."
    },
    {
      "event": "dcMouseUp",
      "description": "Emits an event when the mouse button is released over a list item. Useful for handling mouse up events."
    },
    {
      "event": "dcMouseDown",
      "description": "Emits an event when the mouse button is pressed down on a list item. Useful for handling mouse down events."
    },
    {
      "event": "dcMouseLeave",
      "description": "Emits an event when the mouse leaves a list item. Useful for handling mouse leave events."
    },
    {
      "event": "dcMouseEnter",
      "description": "Emits an event when the mouse enters a list item. Useful for handling mouse enter events."
    },
    {
      "event": "dcDoubleClick",
      "description": "Emits an event when a list item is double-clicked. Useful for handling double-click events."
    }
  ]
  
  inputRows = [
    {
      "input": "dataSource",
      "description": "Specifies the data source for the list component. This is used to dynamically generate the list items."
    },
    {
      "input": "valueExp",
      "description": "Used to determine the values of the list items. This value represents the unique identifier of each list item."
    },
    {
      "input": "displayExp",
      "description": "Used to determine the display text of the list items. This represents the text shown to the user for each list item."
    },
    {
      "input": "visible",
      "description": "Determines the visibility of the list component. If true, the component is visible; if false, it is hidden."
    },
    {
      "input": "dcClass",
      "description": "Adds custom CSS classes to the list component for styling purposes. These classes can be used to customize the appearance of the component."
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

  // tabs: TabModel[] = [{
  //   tabId: 'des',
  //   tabTitle: 'Description'
  // },
  // {
  //   tabId: 'code',
  //   tabTitle: 'Code'
  // },
  // ]
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
  listTS = listTS
  listHTML = listHTML

  listData = [{
    id: 1,
    name: 'Nietzsche',
    icon: 'bolt'
  }, {
    id: 2,
    name: 'Alan Turing',
    icon: 'computer'
  }, {
    id: 3,
    name: 'Cicero',
    icon: 'scale-balanced'
  }, {
    id: 4,
    name: 'Ada Lovelace',
    icon: 'spa'
  }, {
    id: 5,
    name: 'Dostoevskiy',
    icon: 'book'
  }]

  dcListClick(e: any) {
    console.log({ dcListClick: e })
  }
  dcListHover(e: any) {
    console.log({ dcListHover: e })
  }
  dcListDoubleClick(e: any) {
    console.log({ dcListDoubleClick: e })
  }
  dcListMouseDown(e: any) {
    console.log({ dcListMouseDown: e })
  }
  dcListMouseEnter(e: any) {
    console.log({ dcListMouseEnter: e })
  }
  dcListMouseLeave(e: any) {
    console.log({ dcListMouseLeave: e })
  }
  dcListMouseUp(e: any) {
    console.log({ dcListMouseUp: e })
  }

  
  closeModal() {
    this.selectedModal = null

  }

  onModalClick(e: any) {
    this.selectedModal = e

  }
  
  tabChange(){
    // this.table1.recalculate()
    this.table2.recalculate()
  }
}