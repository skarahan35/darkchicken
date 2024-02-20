import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dca-button',
  templateUrl: 'dc-button.component.html',
  styleUrls: ['../../assets/style.css', 'dc-button.component.css']
})
export class DCButtonComponent {
  
    //#region Inputs
    @Input() buttonText?:string = undefined
    @Input() bgColor?:string = undefined
    @Input() hoverBgColor?:string = undefined
    @Input() color?:string = undefined
    @Input() hoverColor?:string = undefined
    @Input() width?:string = undefined
    @Input() height?:string = undefined
    @Input() disabled:boolean = false
    @Input() visible:boolean = true
    @Input() isToggle:boolean = false
    @Input() class:string = '' 
    //#endregion

    //#region Outputs
    @Output() dcClick = new EventEmitter<Event>()
    @Output() dcHover = new EventEmitter<Event>()
    @Output() dcMouseUp = new EventEmitter<Event>()
    @Output() dcMouseDown = new EventEmitter<Event>()
    @Output() dcMouseOut = new EventEmitter<Event>()
    @Output() dcMouseEnter = new EventEmitter<Event>()
    //#endregion


    //#region onClick Event
    onClick(e:Event){
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
    onMouseOut(e:Event){
      this.dcMouseOut.emit(e)
    }
    //#endregion

}
