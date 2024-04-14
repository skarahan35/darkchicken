import { Component } from '@angular/core';
import { TabModel } from 'projects/darkchicken/src/lib/models/dc-models.model';
import { checkboxEventHTML, checkboxEventTS, checkboxPassiveCodeHTML, checkboxPassiveCodeTS, checkboxTypes, noDecorationCheckbox } from 'src/assets/codes/checkbox';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.css']
})
export class CheckboxesComponent {
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

  noDecorationCheckbox=noDecorationCheckbox
  checkboxTypes=checkboxTypes
  checkboxPassiveCodeHTML=checkboxPassiveCodeHTML
  checkboxPassiveCodeTS=checkboxPassiveCodeTS
  checkboxEventHTML=checkboxEventHTML
  checkboxEventTS=checkboxEventTS
  visibleCheckbox=false

  dcClick(e:any){
    console.log({dcClick:e})
  }
  dcHover(e:any){
    console.log({dcHover:e})
  }
  dcMouseUp(e:any){
    console.log({dcMouseUp:e})
  }
  dcMouseDown(e:any){
    console.log({dcMouseDown:e})
  }
  dcMouseLeave(e:any){
    console.log({dcMouseLeave:e})
  }
  dcMouseEnter(e:any){
    console.log({dcMouseEnter:e})
  }
  dcDoubleClick(e:any){
    console.log({dcDoubleClick:e})
  }
  dcValueChanged(e:any){
    console.log({dcValueChanged:e})
  }
}
