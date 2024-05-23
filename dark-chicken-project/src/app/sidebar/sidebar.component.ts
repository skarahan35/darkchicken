import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dc-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isOpen: boolean = true
  logoClass = '';
  logoNameClass = '';
  menuDataAtoms: any = [
    {
      name: 'Bread Crumb',
      itemURL: 'pages/bread-crumbs',
      display: true,
      icon: 'bread-slice'
    },
    {
      name: 'Button',
      itemURL: 'pages/buttons',
      display: true,
      icon: 'play'
    },
    {
      name: 'Checkbox',
      itemURL: 'pages/checkboxes',
      display: true,
      icon: 'square-check'
    },
    {
      name: 'Icon',
      itemURL: 'pages/icons',
      display: true,
      icon: 'icons'
    },
    {
      name: 'Input',
      itemURL: 'pages/inputs',
      display: true,
      icon: 'keyboard'
    },
    {
      name: 'List',
      itemURL: 'pages/lists',
      display: true,
      icon: 'list'
    },
    {
      name: 'Spinner',
      itemURL: 'pages/spinners',
      display: true,
      icon: 'spinner'
    },
    {
      name: 'Tree',
      itemURL: 'pages/tree',
      display: true,
      icon: 'folder-tree'
    }

  ]

  menuDataMolecules: any = [
    {
      name: 'Dropdown',
      itemURL: 'pages/dropdowns',
      display: true,
      icon: 'circle-chevron-down'
    },
    {
      name: 'Tab',
      itemURL: 'pages/tabs',
      display: true,
      icon: 'window-restore'
    },
    {
      name: 'Toast',
      itemURL: 'pages/toast',
      display: true,
      icon: 'circle-info'
    }
  ]

  menuDataDatatables: any = [
    {
      name: 'Datatable',
      itemURL: 'pages/grid',
      display: true,
      icon: 'table'
    },
  ]

  ngOnInit(): void {

    this.onTogglerClick()
  }


  onTogglerClick() {
    let content = document.getElementById('content')
    if (document.body.classList.contains('kt-aside--minimize')) {
      document.body.classList.remove('kt-aside--minimize')
      this.isOpen = false
      content?.classList.add('sidebar-open')

      this.logoClass = 'fade-in';
      this.logoNameClass = 'fade-in';
    } else {
      this.isOpen = true
      document.body.classList.add('kt-aside--minimize')
      content?.classList.remove('sidebar-open')
      this.logoClass = '';
      this.logoNameClass = '';
    }
  }

}
