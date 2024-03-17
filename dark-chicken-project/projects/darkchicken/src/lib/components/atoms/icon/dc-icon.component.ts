import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DCService } from '../../../services/dc.service';
import { Icons } from '../../../types/dc-types';

@Component({
  selector: 'dca-icon',
  templateUrl: 'dc-icon.component.html',
  styleUrls: ['../../../../../assets/style.css', 'dc-icon.component.css']
})
export class DCIconComponent implements OnChanges {
  //#region Inputs
  @Input() icon!: Icons;
  @Input() class: string | null = null
  //#endregion

  //#region Outputs
  @Output() dcClick = new EventEmitter<Event>()
  @Output() dcHover = new EventEmitter<Event>()
  @Output() dcMouseUp = new EventEmitter<Event>()
  @Output() dcMouseDown = new EventEmitter<Event>()
  @Output() dcMouseLeave = new EventEmitter<Event>()
  @Output() dcMouseEnter = new EventEmitter<Event>()
  @Output() dcDoubleClick = new EventEmitter<Event>()
  //#endregion

  svgContent!: SafeHtml;

  constructor(private iconService: DCService, private sanitizer: DomSanitizer) { }



  ngOnChanges(changes: SimpleChanges): void {
    if(changes['icon']){
      this.iconService.getIconSVG(this.icon).subscribe((data: string) => {
        this.svgContent = this.getTrustedSvgContent(data);
      });
    }
  }

  private getTrustedSvgContent(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

  //#region onDoubleClick Event
  onDoubleClick(e: Event) {
    this.dcDoubleClick.emit(e)
  }
  //#endregion

  //#region onClick Event
  onClick(e: Event) {
    this.dcClick.emit(e)
  }
  //#endregion

  //#region onHover Event
  onHover(e: Event) {
    this.dcHover.emit(e)
  }
  //#endregion

  //#region onMouseDown Event
  onMouseDown(e: Event) {
    this.dcMouseDown.emit(e)
  }
  //#endregion

  //#region onMouseUp Event
  onMouseUp(e: Event) {
    this.dcMouseUp.emit(e)
  }
  //#endregion

  //#region onMouseEnter Event
  onMouseEnter(e: Event) {
    this.dcMouseEnter.emit(e)
  }
  //#endregion

  //#region onMouseOut Event
  onMouseLeave(e: Event) {
    this.dcMouseLeave.emit(e)
  }
  //#endregion
}
