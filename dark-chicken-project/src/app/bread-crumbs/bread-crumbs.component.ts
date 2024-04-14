import { Component } from '@angular/core';
import { BreadCrumbModel, TabModel } from 'projects/darkchicken/src/lib/models/dc-models.model';
import { basicCrumbHTML, basicCrumbTS, eventBreadCrumbHTML, eventBreadCrumbTS } from 'src/assets/codes/bread-crumb';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.css'],
})
export class BreadCrumbsComponent {
  basicCrumbHTML = basicCrumbHTML
  basicCrumbTS = basicCrumbTS
  eventBreadCrumbHTML=eventBreadCrumbHTML
  eventBreadCrumbTS=eventBreadCrumbTS

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
}
