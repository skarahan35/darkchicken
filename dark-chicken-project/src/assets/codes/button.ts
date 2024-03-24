export const noDecorationButton = `<dca-button
class="dca-btn dca-btn-primary"
></dca-button>
<dca-button
class="dca-btn dca-btn-secondary"
></dca-button>
<dca-button
class="dca-btn dca-btn-success"
></dca-button>
<dca-button
class="dca-btn dca-btn-danger"
></dca-button>
<dca-button
class="dca-btn dca-btn-warning"
></dca-button>
<dca-button
class="dca-btn dca-btn-info"
></dca-button>
<dca-button
class="dca-btn dca-btn-dark"
></dca-button>
<dca-button
class="dca-btn dca-btn-light"
></dca-button>`;

export const buttonWithTextButton = `<dca-button
buttonText="Primary"
class="dca-btn dca-btn-primary"
></dca-button>
<dca-button
buttonText="Secondary"
class="dca-btn dca-btn-secondary"
></dca-button>
<dca-button
buttonText="Success"
class="dca-btn dca-btn-success"
></dca-button>
<dca-button
buttonText="Danger"
class="dca-btn dca-btn-danger"
></dca-button>
<dca-button
buttonText="Warning"
class="dca-btn dca-btn-warning"
></dca-button>
<dca-button
buttonText="Info"
class="dca-btn dca-btn-info"
></dca-button>
<dca-button
buttonText="Dark"
class="dca-btn dca-btn-dark"
></dca-button>
<dca-button
buttonText="Light"
class="dca-btn dca-btn-light"
></dca-button>`

export const outlinedButton = `<dca-button
buttonText="Primary"
class="dca-btn dca-btn-outline-primary"
></dca-button>
<dca-button
buttonText="Secondary"
class="dca-btn dca-btn-outline-secondary"
></dca-button>
<dca-button
buttonText="Success"
class="dca-btn dca-btn-outline-success"
></dca-button>
<dca-button
buttonText="Danger"
class="dca-btn dca-btn-outline-danger"
></dca-button>
<dca-button
buttonText="Warning"
class="dca-btn dca-btn-outline-warning"
></dca-button>
<dca-button
buttonText="Info"
class="dca-btn dca-btn-outline-info"
></dca-button>
<dca-button
buttonText="Dark"
class="dca-btn dca-btn-outline-dark"
></dca-button>
<dca-button
buttonText="Light"
class="dca-btn dca-btn-outline-light"
></dca-button>
`

export const passiveButton = `<dca-button
  buttonText="Primary"
  class="dca-btn dca-btn-primary"
  [disabled]="true"
></dca-button>
<dca-button
  buttonText="Secondary"
  class="dca-btn dca-btn-secondary"
  [disabled]="true"
></dca-button>
<dca-button
  buttonText="Success"
  class="dca-btn dca-btn-success"
  [disabled]="true"
></dca-button>
<dca-button
  buttonText="Danger"
  class="dca-btn dca-btn-danger"
  [disabled]="true"
></dca-button>
<dca-button
  buttonText="Warning"
  class="dca-btn dca-btn-warning"
  [disabled]="true"
></dca-button>
<dca-button
  buttonText="Info"
  class="dca-btn dca-btn-info"
  [disabled]="true"
></dca-button>
<dca-button
  buttonText="Dark"
  class="dca-btn dca-btn-dark"
  [disabled]="true"
></dca-button>
<dca-button
  buttonText="Light"
  class="dca-btn dca-btn-light"
  [disabled]="true"
></dca-button>`

export const buttonEventsHtml =`<dca-button
buttonText="Primary"
class="dca-btn dca-btn-primary"
(dcClick)="dcClick($event)"
(dcHover)="dcHover($event)"
(dcMouseUp)="dcMouseUp($event)"
(dcMouseDown)="dcMouseDown($event)"
(dcMouseOut)="dcMouseOut($event)"
(dcMouseEnter)="dcMouseEnter($event)"
(dcDoubleClick)="dcDoubleClick($event)"
></dca-button>`

export const buttonEventsTs = `dcClick(e:any){
    console.log({"dcClick": e})
  }
  dcHover(e:any){
    console.log({"dcHover": e})
  }
  dcMouseUp(e:any){
    console.log({"dcMouseUp": e})
  }
  dcMouseDown(e:any){
    console.log({"dcMouseDown": e})
  }
  dcMouseOut(e:any){
    console.log({"dcMouseOut": e})
  }
  dcMouseEnter(e:any){
    console.log({"dcMouseEnter": e})
  }
  dcDoubleClick(e:any){
    console.log({"dcDoubleClick": e})
  }`

  export const buttonSize =`<dca-button
  buttonText="Primary"
  class="dca-btn dca-btn-primary"
  width="400px"
  height="10px"
></dca-button>`