export const validationModelCode = `
export interface InputValidationRulesModel {
   type: InputValidationType,
   message?: string,
   value?: number,
   pattern?: string
},

export type InputValidationType =
  'required'
  | 'min'
  | 'max'
  | 'minLength'
  | 'maxLength'
  | 'regEx'
  | 'null';`

export const noDecorationCode = ` <dca-input class="dca-input content-lib-item"> </dca-input>`

export const labelPlaceholdercode = `<dca-input class="dca-input content-lib-item" label="Label" placeholder="Placeholder" inputId="id-01"></dca-input>`

export const passiveCodeHtml = `  <dca-input [readonly]="true" class="dca-input content-lib-item" value="Dark Chicken"></dca-input>
  <dca-input [disabled]="true" class="dca-input content-lib-item" value="Awsome Inputs"></dca-input>
  <dca-input [visible]="visibleInput" class="dca-input content-lib-item" value="This is a magic"></dca-input>
  <dca-button (dcClick)="visibleInput = !visibleInput" style="display: flex; padding: 0.2rem" buttonText="Click Me" class="dca-btn dca-btn-primary"></dca-button>`

export const passiveCodeTs = `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visibleInput = false
}
`

export const validationCode = `<dca-input label="Required" inputId="req" [validationRules]="[
  {
    type: 'required',
    message: 'Required field'
  }
]" class="dca-input content-lib-item">
</dca-input>
<dca-input label="Min Value" inputId="min" type="number" [validationRules]="[
  {
    type: 'min',
    value: 5,
    message: 'This field value min 5'
  },
  {
    type: 'required',
    message: 'This field value min 5'
  }
]" class="dca-input content-lib-item">
</dca-input>
<dca-input label="Max Value" inputId="max" type="number" [value]="18" [validationRules]="[
  {
    type: 'max',
    value: 10,
    message: 'This field value max 10'
  },
  {
    type: 'required',
    message: 'This field value max 10'
  }
]" class="dca-input content-lib-item">
</dca-input>
<dca-input label="Min Length" inputId="minLength" [validationRules]="[
  { type: 'minLength', value: 5, message: 'This field min length 5' },
  {
    type: 'required',
    message: 'This field min length 5'
  }
]" class="dca-input content-lib-item">
</dca-input>
<dca-input label="Max Length" inputId="maxLength" placeholder="Try max length" [validationRules]="[
  { type: 'maxLength', value: 3, message: 'This field max length 3' },
  {
    type: 'required',
    message: 'This field length max 3'
  }
]" class="dca-input content-lib-item">
</dca-input>
<dca-input label="RegEx" inputId="regEx" [validationRules]="[
  {
    type: 'regEx',
    pattern: '.*a.*',
    message: 'This field allow only letter a'
  },
  {
    type: 'required',
    message: 'Required field'
  }
]" class="dca-input content-lib-item">
</dca-input>`

export const inputEventCodeHtml=`<dca-input class="dca-input content-lib-item" label="Coffe ?" placeholder="It can be hot" inputId="id-02"
(dcValueChanged)="dcValueChanged($event)" (dcFocusOut)="dcFocusOut($event)" (dcFocusIn)="dcFocusIn($event)"
(dcValidating)="dcValidating($event)" (dcValidated)="dcValidated($event)">
<dca-icon icon="coffee"></dca-icon>
</dca-input>`

export const inputEventCodeTs=`dcValueChanged(e: any) {
  console.log({"dcValueChanged": e});
}
dcFocusOut(e: any) {
  console.log({"dcFocusOut": e});
}
dcFocusIn(e: any) {
  console.log({"dcFocusIn": e});
}
dcValidating(e: any) {
  console.log({"dcValidating": e});
}
dcValidated(e: any) {
  console.log({"dcValidated": e});
}`

export const inputSizeCode=`<dca-input class="dca-input content-lib-item" label="Dark Chicken"
placeholder="Here's a really tiny, tiny, sweet chicken" inputId="id-04" width='300px' height="100px">
<dca-icon icon="egg"></dca-icon>
</dca-input>`