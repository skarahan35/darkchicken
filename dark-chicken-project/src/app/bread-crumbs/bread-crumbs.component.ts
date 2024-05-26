import { Component, ViewChild } from '@angular/core';
import { TableColumn } from 'projects/darkchicken';
import { BreadCrumbModel, TabModel } from 'projects/darkchicken/src/lib/models/dc-models.model';
import { basicCrumbHTML, basicCrumbTS, eventBreadCrumbHTML, eventBreadCrumbTS } from 'src/assets/codes/bread-crumb';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.css'],
})
export class BreadCrumbsComponent {
  @ViewChild('table1') table1:any;
  @ViewChild('table2') table2:any;
  selectedModal = null

  eventRows = [
    {
      "event": "dcClick",
      "description": "Emits an event when a breadcrumb item is clicked. Useful for handling click events."
    },
    {
      "event": "dcHover",
      "description": "Emits an event when the mouse hovers over a breadcrumb item. Useful for handling hover events."
    },
    {
      "event": "dcMouseUp",
      "description": "Emits an event when the mouse button is released over a breadcrumb item. Useful for handling mouse up events."
    },
    {
      "event": "dcMouseDown",
      "description": "Emits an event when the mouse button is pressed down on a breadcrumb item. Useful for handling mouse down events."
    },
    {
      "event": "dcMouseLeave",
      "description": "Emits an event when the mouse leaves a breadcrumb item. Useful for handling mouse leave events."
    },
    {
      "event": "dcMouseEnter",
      "description": "Emits an event when the mouse enters a breadcrumb item. Useful for handling mouse enter events."
    },
    {
      "event": "dcDoubleClick",
      "description": "Emits an event when a breadcrumb item is double-clicked. Useful for handling double-click events."
    }
  ]
  
  
  
  
  
  
  
  inputRows = [
    {
      "input": "crumbList",
      "description": "Specifies the list of breadcrumbs to be displayed. This is used to dynamically generate the breadcrumb items based on the provided data."
    },
    {
      "input": "visible",
      "description": "Determines the visibility of the breadcrumb component. If true, the component is visible; if false, it is hidden."
    },
    {
      "input": "dcClass",
      "description": "Adds custom CSS classes to the breadcrumb component for styling purposes. These classes can be used to customize the appearance of the component."
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

  crumbList: BreadCrumbModel[] = [
    { link: 'pages/inputs', icon: 'house' },
    { label: 'Page 1', link: 'https://www.google.com', icon: 'anchor' },
    { label: 'Page 2' },
    { label: 'Page 3' },
  ];

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
  dcMouseLeave(e: any) {
    console.log({ dcMouseLeave: e })
  }
  dcMouseEnter(e: any) {
    console.log({ dcMouseEnter: e })
  }
  dcDoubleClick(e: any) {
    console.log({ dcDoubleClick: e })
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
