import { Component } from '@angular/core';
import { TabModel } from 'projects/darkchicken/src/lib/models/dc-models.model';
import { activeTabHTML, activeTabTS, nestedTabHTML, nestedTabTS, tabEventsHTML, tabEventsTS, tabIconHTML, tabIconTS, tabModelHTML, tabModelTS } from 'src/assets/codes/tab';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

  tabs: TabModel[] = [{
    tabId: 'des',
    tabTitle: 'Description'
  },
  {
    tabId: 'code',
    tabTitle: 'Code'
  },
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
      tabIcon:'pager'
    },
    {
      tabId: 'page-2',
      tabTitle: 'Page 2',
      tabIcon:'person'
    },
    {
      tabId: 'page-3',
      tabTitle: 'Page 3',
      tabIcon:'paperclip'
    }
  ]

  activePages: TabModel[] = [
    {
      tabId: 'page-1',
      tabTitle: 'Page 1',
      tabIcon:'address-book'
    },
    {
      tabId: 'page-2',
      tabTitle: 'Page 2',
      tabIcon:'accusoft',
      isActive:true
    },
    {
      tabId: 'page-3',
      tabTitle: 'Page 3',
      tabIcon:'audio-description'
    }
  ]

  tabModelHTML=tabModelHTML
  tabModelTS=tabModelTS
  tabIconHTML=tabIconHTML
  tabIconTS=tabIconTS
  activeTabHTML=activeTabHTML
  activeTabTS=activeTabTS
  nestedTabHTML=nestedTabHTML
  nestedTabTS=nestedTabTS
  tabEventsHTML=tabEventsHTML
  tabEventsTS=tabEventsTS

  nestedTab1:TabModel[]=[
    {
      tabId:'1-1',
      tabTitle:'Nested 1-1',
      tabIcon:'address-book'
    },
    {
      tabId:'1-2',
      tabTitle:'Nested 1-2',
      tabIcon:'person'
    },
    {
      tabId:'1-3',
      tabTitle:'Nested 1-3',
      tabIcon:'person-cane'
    },
  ]

  nestedTab2:TabModel[]=[
    {
      tabId:'2-1',
      tabTitle:'Nested 2-1',
      tabIcon:'arrows-spin'
    },
    {
      tabId:'2-2',
      tabTitle:'Nested 2-2',
      tabIcon:'adversal'
    },
    {
      tabId:'2-3',
      tabTitle:'Nested 2-3',
      tabIcon:'keybase'
    },
  ]

  nestedTab3:TabModel[]=[
    {
      tabId:'3-1',
      tabTitle:'Nested 3-1',
      tabIcon:'hashnode'
    },
    {
      tabId:'3-2',
      tabTitle:'Nested 3-2',
      tabIcon:'backward-step'
    },
    {
      tabId:'3-3',
      tabTitle:'Nested 3-3',
      tabIcon:'nimblr'
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
