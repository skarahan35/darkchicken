import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DCService } from '../../../services/dc.service';
import { Icons } from '../../../types/dc-types';

@Component({
  selector: 'dca-icon',
  templateUrl: 'dc-icon.component.html',
  styleUrls: ['../../../../../assets/style.css', 'dc-icon.component.css']
})
export class DCIconComponent implements OnInit {
  
  @Input() icon!: Icons;
  

  @Output() dcClick = new EventEmitter<Event>()
  @Output() dcHover = new EventEmitter<Event>()
  @Output() dcMouseUp = new EventEmitter<Event>()
  @Output() dcMouseDown = new EventEmitter<Event>()
  @Output() dcMouseLeave = new EventEmitter<Event>()
  @Output() dcMouseEnter = new EventEmitter<Event>()
  @Output() dcDoubleClick = new EventEmitter<Event>()

  svgContent!: SafeHtml;

  constructor(private iconService: DCService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.iconService.getIconSVG(this.icon).subscribe((data:string) => {
      this.svgContent = this.getTrustedSvgContent(data);
    });
  }

  private getTrustedSvgContent(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

  onDoubleClick(e:Event){
    this.dcDoubleClick.emit(e)
  }

  //#region onClick Event
  onClick(e:Event){
    // document.documentElement.style.setProperty('')
    this.dcClick.emit(e)
  }
  //#endregion

  //#region onHover Event
  onHover(e:Event){
    this.dcHover.emit(e)
  }
  //#endregion

  //#region onMouseDown Event
  onMouseDown(e:Event){
    this.dcMouseDown.emit(e)
  }
  //#endregion

  //#region onMouseUp Event
  onMouseUp(e:Event){
    this.dcMouseUp.emit(e)
  }
  //#endregion

  //#region onMouseEnter Event
  onMouseEnter(e:Event){
    this.dcMouseEnter.emit(e)
  }
  //#endregion

  //#region onMouseOut Event
  onMouseLeave(e:Event){
    this.dcMouseLeave.emit(e)
  }
  //#endregion
}
