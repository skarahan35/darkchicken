export const noDecorationCheckbox = `<dca-checkbox></dca-checkbox>`
export const checkboxTypes=`
<dca-checkbox type="box" label="Type Box" id="001" ></dca-checkbox>
<dca-checkbox type="switch" label="Type Switch" id="002" ></dca-checkbox>`
export const checkboxPassiveCodeHTML=`<dca-checkbox type="box" [visible]="visibility"></dca-checkbox>
<dca-checkbox type="switch" [disabled]="true" [checked]="true"></dca-checkbox>`
export const checkboxPassiveCodeTS=`import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visibleCheckbox = false
}`

export const checkboxEventHTML=`<dca-checkbox
(dcClick)="dcClick($event)"
(dcHover)="dcHover($event)"
(dcMouseUp)="dcMouseUp($event)"
(dcMouseDown)="dcMouseDown($event)"
(dcMouseLeave)="dcMouseLeave($event)"
(dcMouseEnter)="dcMouseEnter($event)"
(dcDoubleClick)="dcDoubleClick($event)"
(dcValueChanged)="dcValueChanged($event)"
type="box"></dca-checkbox>

<dca-checkbox
(dcClick)="dcClick($event)"
(dcHover)="dcHover($event)"
(dcMouseUp)="dcMouseUp($event)"
(dcMouseDown)="dcMouseDown($event)"
(dcMouseLeave)="dcMouseLeave($event)"
(dcMouseEnter)="dcMouseEnter($event)"
(dcDoubleClick)="dcDoubleClick($event)"
(dcValueChanged)="dcValueChanged($event)"
type="switch"></dca-checkbox>`

export const checkboxEventTS=`
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
  }`