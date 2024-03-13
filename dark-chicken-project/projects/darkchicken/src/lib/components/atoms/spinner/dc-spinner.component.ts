import { Component, Input } from '@angular/core';

@Component({
  selector: 'dca-spinner',
  templateUrl: './dc-spinner.component.html',
  styleUrls: ['../../../../../assets/style.css', './dc-spinner.component.css']
})
export class DCSpinnerComponent {
  //#region Inputs
  @Input() active: boolean = true
  @Input() class: string = 'dca-spinner-primary'
  //#endregion
}
