import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dca-button',
  templateUrl: 'dc-button.component.html',
  styleUrls: ['../../assets/style.css']
})
export class DCButtonComponent {
  
    //#region Inputs
    @Input() buttonText:String = 'TEST'
    @Input() bgColor:String = 'blue'
    @Input() hoverBgColor: String = 'pink'
    @Input() color:String = 'white'
    @Input() hoverColor: String = 'red'
    @Input() width:String = '50px'
    @Input() height:String = '20px'
    @Input() disabled:boolean = false
    @Input() visible:boolean = true
    @Input() isToggle:boolean = false
    //#endregion

    //#region Outputs
    @Output() dcClick = new EventEmitter<Event>()
    @Output() dcHover = new EventEmitter<Event>()
    @Output() dcMouseUp = new EventEmitter<Event>()
    @Output() dcMouseDown = new EventEmitter<Event>()
    @Output() dcMouseOut = new EventEmitter<Event>()
    @Output() dcMouseEnter = new EventEmitter<Event>()
    //#endregion

    //#region Variables
    private originalBgColor:String = this.bgColor
    private originalColor:String = this.color
    //#endregion

    //#region onClick Event
    onClick(e:Event){
      this.dcClick.emit(e)
    }
    //#endregion

    //#region onHover Event
    onHover(e:Event){
      this.dcHover.emit(e)
      this.bgColor = this.hoverBgColor
      this.color = this.hoverColor
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
      this.bgColor = this.originalBgColor
      this.color = this.originalColor
      this.dcMouseOut.emit(e)
    }
    //#endregion

}
