import { Component } from '@angular/core';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.css'],
})
export class BreadCrumbsComponent {
  crumbList: any = [
    { link: 'pages/inputs',icon: 'house' },
    { label: 'Page 1', link: 'https://www.google.com', icon: 'anchor' },
    { label: 'Page 2',  },
    { label: 'Page 3' },
  ];

dcClick(e:any){
  console.log({"dcClick":e})
}
dcHover(e:any){
  console.log({"dcHover":e})
}
dcMouseUp(e:any){
  console.log({"dcMouseUp":e})
}
dcMouseDown(e:any){
  console.log({"dcMouseDown":e})
}
dcMouseLeave(e:any){
  console.log({"dcMouseLeave":e})
}
dcMouseEnter(e:any){
  console.log({"dcMouseEnter":e})
}
dcDoubleClick(e:any){
  console.log({"dcDoubleClick":e})
}
}
