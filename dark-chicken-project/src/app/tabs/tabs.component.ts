import { Component, ViewChild } from '@angular/core';
import { TableColumn } from 'projects/darkchicken';
import { TabModel } from 'projects/darkchicken/src/lib/models/dc-models.model';
import { activeTabHTML, activeTabTS, nestedTabHTML, nestedTabTS, tabEventsHTML, tabEventsTS, tabIconHTML, tabIconTS, tabModelHTML, tabModelTS } from 'src/assets/codes/tab';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  selectedModal = null
  @ViewChild('table1') table1: any;
  @ViewChild('table2') table2: any;
  eventRows = [
    {
      "event": "dcTabChange",
      "description": "Emitted when the active tab is changed"
    },
    {
      "event": "dcTabClick",
      "description": "Emitted when a tab is clicked"
    },
    {
      "event": "dcTabHover",
      "description": "Emitted when the mouse hovers over a tab"
    },
    {
      "event": "dcTabMouseDown",
      "description": "Emitted when the mouse button is pressed over a tab"
    },
    {
      "event": "dcTabMouseUp",
      "description": "Emitted when the mouse button is released over a tab"
    },
    {
      "event": "dcTabMouseEnter",
      "description": "Emitted when the mouse enters the tab area"
    },
    {
      "event": "dcTabMouseLeave",
      "description": "Emitted when the mouse leaves the tab area"
    },
    {
      "event": "dcTabDoubleClick",
      "description": "Emitted when a tab is double-clicked"
    }
  ];

  inputRows = [
    {
      "input": "tab",
      "description": "The data model for the tabs, defining their properties"
    },
    {
      "input": "dcClass",
      "description": "CSS class applied to the tab component"
    }
  ];



  inputColumns: TableColumn[] = [
    {
      prop: 'input',
      name: 'Input',
      dataType: 'text',
      visible: true,
    },
    {
      prop: 'description',
      name: 'Description',
      dataType: 'text',
      visible: true,
    }
  ]
  eventColumns: TableColumn[] = [
    {
      prop: 'event',
      name: 'Event',
      dataType: 'text',
      visible: true
    },
    {
      prop: 'description',
      name: 'Description',
      dataType: 'text',
      visible: true
    }
  ]

  tabs: TabModel[] = [
    {
      tabId: '1',
      tabTitle: '',
      tabIcon: "html5"
    },
    {
      tabId: '2',
      tabTitle: '',
      tabIcon: "angular"
    }
  ]
  tabProperties: TabModel[] = [
    {
      tabId: '1',
      tabTitle: 'Inputs',
    },
    {
      tabId: '2',
      tabTitle: 'Events',
    }
  ]
  onModalClick(e: any, event: any) {
    if ((event.target as HTMLElement).classList.contains('button-wrapper') || (event.target as HTMLElement).classList.contains('button-title') || (event.target as HTMLElement).classList.contains('card')) {
      this.selectedModal = e
    }
  }
  tabChange() {
    // this.table1.recalculate()
    this.table2.recalculate()
  }

  closeModal() {
    this.selectedModal = null

  }


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

  pages: TabModel[] = [
    {
      tabId: 'page-1',
      tabTitle: 'Page 1'
    },
    {
      tabId: 'page-2',
      tabTitle: 'Page 2'
    },
    {
      tabId: 'page-3',
      tabTitle: 'Page 3'
    }
  ]

  pagesWithIcon: TabModel[] = [
    {
      tabId: 'page-1',
      tabTitle: 'Page 1',
      tabIcon: 'pager'
    },
    {
      tabId: 'page-2',
      tabTitle: 'Page 2',
      tabIcon: 'person'
    },
    {
      tabId: 'page-3',
      tabTitle: 'Page 3',
      tabIcon: 'paperclip'
    }
  ]

  activePages: TabModel[] = [
    {
      tabId: 'page-1',
      tabTitle: 'Page 1',
      tabIcon: 'pager'
    },
    {
      tabId: 'page-2',
      tabTitle: 'Page 2',
      tabIcon: 'person',
      isActive: true
    },
    {
      tabId: 'page-3',
      tabTitle: 'Page 3',
      tabIcon: 'paperclip'
    }
  ]

  nestedTab1: TabModel[] = [
    {
      tabId: '1-1',
      tabTitle: 'Nested 1-1',
      tabIcon: 'address-book'
    },
    {
      tabId: '1-2',
      tabTitle: 'Nested 1-2',
      tabIcon: 'person'
    },
    {
      tabId: '1-3',
      tabTitle: 'Nested 1-3',
      tabIcon: 'person-cane'
    },
  ]

  nestedTab2: TabModel[] = [
    {
      tabId: '2-1',
      tabTitle: 'Nested 2-1',
      tabIcon: 'arrows-spin'
    },
    {
      tabId: '2-2',
      tabTitle: 'Nested 2-2',
      tabIcon: 'adversal'
    },
    {
      tabId: '2-3',
      tabTitle: 'Nested 2-3',
      tabIcon: 'keybase'
    },
  ]

  nestedTab3: TabModel[] = [
    {
      tabId: '3-1',
      tabTitle: 'Nested 3-1',
      tabIcon: 'hashnode'
    },
    {
      tabId: '3-2',
      tabTitle: 'Nested 3-2',
      tabIcon: 'backward-step'
    },
    {
      tabId: '3-3',
      tabTitle: 'Nested 3-3',
      tabIcon: 'nimblr'
    },
  ]

  dcTabChange(e: any) {
    console.log({ dcTabChange: e })
  }
  dcTabClick(e: any) {
    console.log({ dcTabClick: e })
  }
  dcTabHover(e: any) {
    console.log({ dcTabHover: e })
  }
  dcTabMouseDown(e: any) {
    console.log({ dcTabMouseDown: e })
  }
  dcTabMouseUp(e: any) {
    console.log({ dcTabMouseUp: e })
  }
  dcTabMouseEnter(e: any) {
    console.log({ dcTabMouseEnter: e })
  }
  dcTabMouseLeave(e: any) {
    console.log({ dcTabMouseLeave: e })
  }
  dcTabDoubleClick(e: any) {
    console.log({ dcTabDoubleClick: e })
  }
}
