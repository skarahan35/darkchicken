import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dca-button',
  templateUrl: 'dc-button.component.html',
  styleUrls: ['../../assets/style.css', 'dc-button.component.css']
})
export class DCButtonComponent {
  
    //#region Inputs
    @Input() buttonText?:string = undefined
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
    @Output() dcMouseLeave = new EventEmitter<Event>()
    @Output() dcMouseEnter = new EventEmitter<Event>()
    @Output() dcDoubleClick = new EventEmitter<Event>()
    //#endregion

    

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
