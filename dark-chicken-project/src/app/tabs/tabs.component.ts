import { Component } from '@angular/core';
import { TabModel } from 'projects/darkchicken/src/lib/models/dc-models.model';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

  val = false

  tabs: TabModel[] = [
    {
      tabId: "tab-1",
      tabTitle: "Tab 1",
      tabIcon: 'bolt'
    },
    {
      tabId: "tab-2",
      tabTitle: "Tab 2",
      tabIcon: 'android'
    },
    {
      tabId: "tab-3",
      tabTitle: "Tab 3",
      tabIcon: 'anchor',
    }, {
      tabId: "tab-4",
      tabTitle: "Tab 4",
      tabIcon: 'html5',
    }
  ]

  subTabs: TabModel[] = [
    {
      tabId: "sub-tab-1",
      tabTitle: "Sub Tab 1",
      tabIcon: 'bolt'
    },
    {
      tabId: "sub-tab-2",
      tabTitle: "Sub Tab 2",
      tabIcon: 'android'
    },
  ]

  dcTabChange(e: any) {
    console.log({ "dcTabChange": e })
  }
  dcTabClick(e: any) {
    console.log({ "dcTabClick": e })
  }
  dcTabHover(e: any) {
    console.log({ "dcTabHover": e })
  }
  dcTabMouseDown(e: any) {
    console.log({ "dcTabMouseDown": e })
  }
  dcTabMouseUp(e: any) {
    console.log({ "dcTabMouseUp": e })
  }
  dcTabMouseEnter(e: any) {
    console.log({ "dcTabMouseEnter": e })
  }
  dcTabMouseLeave(e: any) {
    console.log({ "dcTabMouseLeave": e })
  }
  dcTabDoubleClick(e: any) {
    console.log({ "dcTabDoubleClick": e })
  }
}
