import { Component } from '@angular/core';
import { TabModel } from 'projects/darkchicken/src/lib/models/dc-models.model';
import { listHTML, listTS } from 'src/assets/codes/list';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent {
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
}