import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BreadCrumbModel } from '../../../models/input-validation-rules.model';

@Component({
  selector: 'dca-bread-crumb',
  templateUrl: 'dc-bread-crumb.component.html',
  styleUrls: ['../../../../../assets/style.css', 'dc-bread-crumb.component.css']
})
export class DCBreadCrumbComponent {
  @Input() crumbList!:BreadCrumbModel[]
  @Input() visible:boolean = true
  @Input() disable:boolean = false


}
