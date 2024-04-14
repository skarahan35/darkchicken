export const firstDropdownHTML = `
<dcm-dropdown
#myDropdown
[value]="dropdownValue">
    <dca-list (dcClick)="optionSelect($event)"
         displayExp="name" valueExp="id"
         [dataSource]="listData"></dca-list>
</dcm-dropdown>`

export const firstDropdownTS = `
import { Component, ViewChild } from '@angular/core';
import { DcDropdownComponent } from 'darkchicken';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css'],
})
export class DropdownsComponent {
  @ViewChild('myDropdown') myDropdown!: DcDropdownComponent;

  dropdownValue: string = ''

  listData = [{
    id: 1,
    name: 'Nietzsche',
    icon: 'bolt'
  }, {
    id: 2,
    name: 'Alan Turing',
    icon: 'computer'
  }, {
    id: 3,
    name: 'Cicero',
    icon: 'scale-balanced'
  }, {
    id: 4,
    name: 'Ada Lovelace',
    icon: 'spa'
  }, {
    id: 5,
    name: 'Dostoevskiy',
    icon: 'book'
  }]


  optionSelect(e: any) {
    this.dropdownValue = e.listItem.name
    this.myDropdown.closeDropdown()
  }
}
`
export const dropdownInputsHTML = `
 <dcm-dropdown
      placeholder="Placeholder"
      #myDropdown1
      [value]="dropdownValue">
      <dca-list
           (dcClick)="optionSelect($event, myDropdown1)"
           displayExp="name" valueExp="id"
           [dataSource]="listData"></dca-list>
 </dcm-dropdown>
 <dcm-dropdown
      [readonly]="true"
      #myDropdown2
      [value]="dropdownValue">
      <dca-list
           (dcClick)="optionSelect($event, myDropdown2)"
           displayExp="name" valueExp="id"
           [dataSource]="listData"></dca-list>
 </dcm-dropdown>
 <dcm-dropdown
      [disabled]="true"
      #myDropdown3
      [value]="dropdownValue">
      <dca-list
           (dcClick)="optionSelect($event, myDropdown3)"
           displayExp="name" valueExp="id"
           [dataSource]="listData"></dca-list>
 </dcm-dropdown>
 <dcm-dropdown
      [closeOnOutsideClick]="false"
      #myDropdown4
      [value]="dropdownValue">
      <dca-list
           (dcClick)="optionSelect($event, myDropdown4)"
           displayExp="name" valueExp="id"
           [dataSource]="listData"></dca-list>
 </dcm-dropdown>
 <dcm-dropdown
      dcClass="my-custom-class"
      #myDropdown5
      [value]="dropdownValue">
      <dca-list
           (dcClick)="optionSelect($event, myDropdown5)"
           displayExp="name" valueExp="id"
           [dataSource]="listData"></dca-list>
 </dcm-dropdown>
 <dcm-dropdown
      [visible]="false"
      #myDropdown6
      [value]="dropdownValue">
      <dca-list
           (dcClick)="optionSelect($event, myDropdown6)"
           displayExp="name" valueExp="id"
           [dataSource]="listData"></dca-list>
 </dcm-dropdown>`


export const dropdownInputsTS = `
import { Component, ViewChild } from '@angular/core';
import { DcDropdownComponent } from 'darkchicken';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css'],
})
export class DropdownsComponent {
  listData = [{
    id: 1,
    name: 'Nietzsche',
    icon: 'bolt'
  }, {
    id: 2,
    name: 'Alan Turing',
    icon: 'computer'
  }, {
    id: 3,
    name: 'Cicero',
    icon: 'scale-balanced'
  }, {
    id: 4,
    name: 'Ada Lovelace',
    icon: 'spa'
  }, {
    id: 5,
    name: 'Dostoevskiy',
    icon: 'book'
  }]


  optionSelect(e: any, dropdown:DcDropdownComponent) {
    dropdown.value = e.listItem.name
    dropdown.closeDropdown()
  }
}
`

export const dropdownOutputsHTML = `
<dcm-dropdown
(dcClick)="dropdownClick($event)"
(dcCollapsing)="dropdownCollapsing($event)"
(dcExpanding)="dropdownExpanding($event)"
#treeDropdown>
<dca-tree
     (dcClick)="onTreeClick($event, treeDropdown)"
     [treeData]="lessons"></dca-tree>
</dcm-dropdown>`

export const dropdownOutputsTS = `
import { Component, ViewChild } from '@angular/core';
import { DcDropdownComponent } from 'darkchicken';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css'],
})
export class DropdownsComponent {
  lessons: TreeModel[] = [
    {
      "title": "Computer Science",
      "icon": "computer",
      "subItems": [
        {
          "title": "Algorithms",
          "subItems": [
            {
              "title": "Sorting Algorithms",
              "subItems": [
                {
                  "title": "Bubble Sort",
                },
                {
                  "title": "Merge Sort",
                }
              ]
            },
            {
              "title": "Search Algorithms",
              "subItems": [
                {
                  "title": "Binary Search",
                },
                {
                  "title": "Linear Search",
                }
              ]
            }
          ]
        },
        {
          "title": "Data Structures",
          "subItems": [
            {
              "title": "Arrays",
            },
            {
              "title": "Linked Lists",
            }
          ]
        }
      ]
    },
    {
      "title": "Mathematics",
      "icon": "nutritionix",
      "subItems": [
        {
          "title": "Algebra",
          "subItems": [
            {
              "title": "Linear Algebra",
            },
            {
              "title": "Matrices",
            }
          ]
        },
        {
          "title": "Geometry",
          "subItems": [
            {
              "title": "Plane Geometry",
            },
            {
              "title": "Spatial Geometry",
            }
          ]
        }
      ]
    }

  ]

 onTreeClick(e: any, treeDropdown:DcDropdownComponent) {
    if (!e.item.subItems) {
      treeDropdown.value = e.item.title
      treeDropdown.closeDropdown()
    }
  }

 dropdownClick(e: any) {
    console.log({ dropdownClick: e })
  }

  dropdownCollapsing(e: any) {
    console.log({ dropdownCollapsing: e })
  }

  dropdownExpanding(e: any) {
    console.log({ dropdownExpanding: e })
  }
}
`