import { Component } from '@angular/core';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.css'],
})
export class BreadCrumbsComponent {
  crumbList: any = [
    { link: '', icon: 'house' },
    { label: 'Page 1', link: 'test', icon: 'anchor' },
    { label: 'Page 2', link: '' },
    { label: 'Page 3' },
  ];
}
