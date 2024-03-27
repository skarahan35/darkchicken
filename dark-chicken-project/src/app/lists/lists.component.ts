import { Component } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent {
  listData=[{
    id:1,
    name:'ergul 1',
    icon:'bolt'
  },{
    id:2,
    name:'ergul 2'
  },{
    id:3,
    name:'ergul 3'
  },{
    id:4,
    name:'ergul 4'
  },{
    id:5,
    name:'ergul 5'
  },{
    id:6,
    name:'ergul 6'
  },{
    id:7,
    name:'ergul 7'
  },]

  dcListClick(e:any){
    console.log({ "dcListClick": e })
  }
  dcListHover(e:any){
    console.log({ "dcListHover": e })
  }
  dcListDoubleClick(e:any){
    console.log({ "dcListDoubleClick": e })
  }
  dcListMouseDown(e:any){
    console.log({ "dcListMouseDown": e })
  }
  dcListMouseEnter(e:any){
    console.log({ "dcListMouseEnter": e })
  }
  dcListMouseLeave(e:any){
    console.log({ "dcListMouseLeave": e })
  }
  dcListMouseUp(e:any){
    console.log({ "dcListMouseUp": e })
  }
}