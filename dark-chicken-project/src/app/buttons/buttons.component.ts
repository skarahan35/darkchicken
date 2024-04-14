import { Component } from '@angular/core';
import { TabModel } from 'projects/darkchicken/src/lib/models/dc-models.model';
import { buttonEventsHtml, buttonEventsTs, buttonSize, buttonWithTextButton, noDecorationButton, outlinedButton, passiveButton } from 'src/assets/codes/button';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {

  tabs: TabModel[] = [{
    tabId: 'des',
    tabTitle: 'Description'
  },
  {
    tabId: 'code',
    tabTitle: 'Code'
  },
  ]
  codeTabs:TabModel[] = [
    {
      tabId:'html',
      tabTitle:'HTML',
      tabIcon:'html5',
    },
    {
      tabId:'ts',
      tabTitle:'TS',
      tabIcon:'angular',
    }
  ]
noDecorationButton = noDecorationButton
buttonWithTextButton = buttonWithTextButton
outlinedButton = outlinedButton
passiveButton = passiveButton
buttonEventsHtml = buttonEventsHtml
buttonEventsTs = buttonEventsTs
buttonSize = buttonSize
  
dcClick(e:any){
  console.log({dcClick: e})
}
dcHover(e:any){
  console.log({dcHover: e})
}
dcMouseUp(e:any){
  console.log({dcMouseUp: e})
}
dcMouseDown(e:any){
  console.log({dcMouseDown: e})
}
dcMouseOut(e:any){
  console.log({dcMouseOut: e})
}
dcMouseEnter(e:any){
  console.log({dcMouseEnter: e})
}
dcDoubleClick(e:any){
  console.log({dcDoubleClick: e})
}
}
