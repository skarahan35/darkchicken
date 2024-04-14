import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { DcDropdownComponent } from 'projects/darkchicken';
import { TabModel, TreeModel } from 'projects/darkchicken/src/lib/models/dc-models.model';
import { dropdownInputsHTML, dropdownInputsTS, dropdownOutputsHTML, dropdownOutputsTS, firstDropdownHTML, firstDropdownTS } from 'src/assets/codes/dropdown';

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


  optionSelect(e: any, dropdown: DcDropdownComponent) {
    dropdown.value = e.listItem.name
    dropdown.closeDropdown()
  }


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


  firstDropdownHTML = firstDropdownHTML
  firstDropdownTS = firstDropdownTS
  dropdownInputsHTML = dropdownInputsHTML
  dropdownInputsTS = dropdownInputsTS
  dropdownOutputsHTML = dropdownOutputsHTML
  dropdownOutputsTS = dropdownOutputsTS
  visibleDropdown = false

  tabs: TabModel[] = [{
    tabId: 'des',
    tabTitle: 'Description'
  },
  {
    tabId: 'code',
    tabTitle: 'Code'
  },
  ]
  codeTabs: TabModel[] = [
    {
      tabId: 'html',
      tabTitle: 'HTML',
      tabIcon: 'html5',
    },
    {
      tabId: 'ts',
      tabTitle: 'TS',
      tabIcon: 'angular',
    }
  ]

  treeVal: string = ''
  templateVal: string = ''


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
