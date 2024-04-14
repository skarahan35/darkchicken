import { Component, Input,  } from '@angular/core';


@Component({
  selector: 'dc-grid',
  templateUrl: './dc-grid.component.html'
})
export class DcGridComponent {
  @Input() columns!: string[]
  @Input() dataSource!: any[]
  @Input() headerTemplate: any
  @Input() bodyCellTemplate:any
}
