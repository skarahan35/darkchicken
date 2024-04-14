export const listHTML=`
<dca-list (dcClick)="dcListClick($event)"
(dcHover)="dcListHover($event)"
(dcDoubleClick)="dcListDoubleClick($event)"
(dcMouseDown)="dcListMouseDown($event)"
(dcMouseEnter)="dcListMouseEnter($event)"
(dcMouseLeave)="dcListMouseLeave($event)"
(dcMouseUp)="dcListMouseUp($event)" displayExp="name"
valueExp="id"
[dataSource]="listData"></dca-list>`

export const listTS=`
import { Component } from '@angular/core';
@Component({
 selector 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent {

  listData=[{
    id:1,
    name:'Nietzsche',
    icon:'bolt'
  },{
    id:2,
    name:'Alan Turing',
    icon:'computer'
  },{
    id:3,
    name:'Cicero',
    icon:'scale-balanced'
  },{
    id:4,
    name:'Ada Lovelace',
    icon:'spa'
  },{
    id:5,
    name:'Dostoevskiy',
    icon:'book'
  }]

  dcListClick(e:any){
    console.log({ dcListClick: e })
  }
  dcListHover(e:any){
    console.log({ dcListHover: e })
  }
  dcListDoubleClick(e:any){
    console.log({ dcListDoubleClick: e })
  }
  dcListMouseDown(e:any){
    console.log({ dcListMouseDown: e })
  }
  dcListMouseEnter(e:any){
    console.log({ dcListMouseEnter: e })
  }
  dcListMouseLeave(e:any){
    console.log({ dcListMouseLeave: e })
  }
  dcListMouseUp(e:any){
    console.log({ dcListMouseUp: e })
  }`