import { Component, Input } from '@angular/core';

@Component({
  selector: 'dca-spinner',
  templateUrl: './dc-spinner.component.html'
})
export class DCSpinnerComponent {
  //#region Inputs
  @Input() active: boolean = true
  @Input() dcClass: string = 'dca-spinner-primary'
  //#endregion
}
