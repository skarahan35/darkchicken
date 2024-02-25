import { Component } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent {

  consoleText = ''

  dcClick(e: any) {
    this.consoleText += "dcClick \n"
    console.log("dcClick")
  }
  dcHover(e: any) {
    this.consoleText += "dcHover \n"
    console.log("dcHover")
  }
  dcMouseUp(e: any) {
    this.consoleText += "dcMouseUp \n"
    console.log("dcMouseUp")
  }
  dcMouseDown(e: any) {
    this.consoleText += "dcMouseDown \n"
    console.log("dcMouseDown")
  }
  dcMouseLeave(e: any) {
    this.consoleText += "dcMouseLeave \n"
    console.log("dcMouseLeave")
  }
  dcMouseEnter(e: any) {
    this.consoleText += "dcMouseEnter \n"
    console.log("dcMouseEnter")
  }
  dcDoubleClick(e: any) {
    this.consoleText += "dcDoubleClick \n"
    console.log("dcDoubleClick")
  }
}
