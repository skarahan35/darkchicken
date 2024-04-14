export const tabModelHTML=`
<dcm-tab [tab]="pages">
    <div #tabContent [id]="pages[0].tabId"> content 1</div>
    <div #tabContent [id]="pages[1].tabId"> content 2</div>
    <div #tabContent [id]="pages[2].tabId"> content 3</div>
</dcm-tab>`

export const tabModelTS=`
import { Component } from '@angular/core';
import { TabModel } from 'darkchicken';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

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
}`

export const tabIconHTML=`
<dcm-tab [tab]="pagesWithIcon">
    <div #tabContent [id]="pages[0].tabId"> content 1</div>
    <div #tabContent [id]="pages[1].tabId"> content 2</div>
    <div #tabContent [id]="pages[2].tabId"> content 3</div>
</dcm-tab>
`

export const tabIconTS=`
import { Component } from '@angular/core';
import { TabModel } from 'darkchicken';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

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
}`

export const activeTabHTML=`                    
<dcm-tab [tab]="activePages">
    <div #tabContent [id]="pages[0].tabId"> content 1</div>
    <div #tabContent [id]="pages[1].tabId"> content 2</div>
    <div #tabContent [id]="pages[2].tabId"> content 3</div>
</dcm-tab>
`
export const activeTabTS=`
import { Component } from '@angular/core';
import { TabModel } from 'darkchicken';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

activePages: TabModel[] = [
    {
      tabId: 'page-1',
      tabTitle: 'Page 1',
      tabIcon:'pager'
    },
    {
      tabId: 'page-2',
      tabTitle: 'Page 2',
      tabIcon:'person',
      isActive:true
    },
    {
      tabId: 'page-3',
      tabTitle: 'Page 3',
      tabIcon:'paperclip'
    }
  ]
}`

export const nestedTabHTML= `
<dcm-tab [tab]="pages">
    <div #tabContent [id]="pages[0].tabId">
        <dcm-tab [tab]="nestedTab1">
            <div #tabContent [id]="nestedTab1[0].tabId">
                Nested Content 1</div>
            <div #tabContent [id]="nestedTab1[1].tabId">
                Nested Content 2</div>
            <div #tabContent [id]="nestedTab1[2].tabId">
                Nested Content 3</div>
        </dcm-tab>
        Tab Content 1
    </div>
    <div #tabContent [id]="pages[1].tabId">
        <dcm-tab [tab]="nestedTab2">
            <div #tabContent [id]="nestedTab2[0].tabId">
                Nested Content 1</div>
            <div #tabContent [id]="nestedTab2[1].tabId">
                Nested Content 2</div>
            <div #tabContent [id]="nestedTab2[2].tabId">
                Nested Content 3</div>
        </dcm-tab>
        Tab Content 2
    </div>
    <div #tabContent [id]="pages[2].tabId">
        <dcm-tab [tab]="nestedTab3">
            <div #tabContent [id]="nestedTab3[0].tabId">
                Nested Content 1</div>
            <div #tabContent [id]="nestedTab3[1].tabId">
                Nested Content 2</div>
            <div #tabContent [id]="nestedTab3[2].tabId">
                Nested Content 3</div>
        </dcm-tab>
        Tab Content 3
    </div>
</dcm-tab>`

export const nestedTabTS=`
import { Component } from '@angular/core';
import { TabModel } from 'darkchicken';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

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

}`

export const tabEventsHTML=`
<dcm-tab
(dcTabChange)="dcTabChange($event)"
(dcTabClick)="dcTabClick($event)"
(dcTabHover)="dcTabHover($event)"
(dcTabMouseDown)="dcTabMouseDown($event)"
(dcTabMouseUp)="dcTabMouseUp($event)"
(dcTabMouseEnter)="dcTabMouseEnter($event)"
(dcTabMouseLeave)="dcTabMouseLeave($event)"
(dcTabDoubleClick)="dcTabDoubleClick($event)"
[tab]="activePages">
    <div #tabContent [id]="pages[0].tabId"> content 1</div>
    <div #tabContent [id]="pages[1].tabId"> content 2</div>
    <div #tabContent [id]="pages[2].tabId"> content 3</div>
</dcm-tab>
`

export const tabEventsTS=`
import { Component } from '@angular/core';
import { TabModel } from 'darkchicken';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

activePages: TabModel[] = [
    {
      tabId: 'page-1',
      tabTitle: 'Page 1',
      tabIcon:'pager'
    },
    {
      tabId: 'page-2',
      tabTitle: 'Page 2',
      tabIcon:'person',
      isActive:true
    },
    {
      tabId: 'page-3',
      tabTitle: 'Page 3',
      tabIcon:'paperclip'
    }
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
}`