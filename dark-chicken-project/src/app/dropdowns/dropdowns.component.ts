import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { DcDropdownComponent, TableColumn } from 'projects/darkchicken';
import { TabModel, TreeModel } from 'projects/darkchicken/src/lib/models/dc-models.model';
import { dropdownInputsHTML, dropdownInputsTS, dropdownOutputsHTML, dropdownOutputsTS, firstDropdownHTML, firstDropdownTS } from 'src/assets/codes/dropdown';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css'],
})
export class DropdownsComponent {
  @ViewChild('myDropdown') myDropdown!: DcDropdownComponent;
  @ViewChild('table1') table1:any;
  @ViewChild('table2') table2:any;
  selectedModal = null

  eventRows = [
    {
      "event": "dcClick",
      "description": "Emitted when the dropdown is clicked"
    },
    {
      "event": "dcExpanding",
      "description": "Emitted when the dropdown menu is expanded"
    },
    {
      "event": "dcCollapsing",
      "description": "Emitted when the dropdown menu is collapsed"
    },
    {
      "event": "dcFocusOut",
      "description": "Emitted when the dropdown loses focus"
    },
    {
      "event": "dcValidating",
      "description": "Emitted when the dropdown is being validated"
    },
    {
      "event": "dcValidated",
      "description": "Emitted when the dropdown validation is complete"
    },
    {
      "event": "dcMouseEnter",
      "description": "Emitted when the mouse enters the dropdown area"
    }
  ];
  
  inputRows = [
    {
      "input": "placeholder",
      "description": "Text displayed in the dropdown before a selection is made"
    },
    {
      "input": "value",
      "description": "Initial value of the dropdown"
    },
    {
      "input": "closeOnOutsideClick",
      "description": "Determines if the dropdown should close when clicking outside of it"
    },
    {
      "input": "disabled",
      "description": "Indicates if the dropdown is disabled"
    },
    {
      "input": "readonly",
      "description": "Indicates if the dropdown is read-only"
    },
    {
      "input": "visible",
      "description": "Indicates if the dropdown is visible"
    },
    {
      "input": "dcClass",
      "description": "CSS class applied to the dropdown"
    },
    {
      "input": "isRequired",
      "description": "Specifies if the dropdown is a required field"
    },
    {
      "input": "validationMessage",
      "description": "Message displayed when validation fails"
    },
    {
      "input": "contentPosition",
      "description": "Position of the dropdown content, either 'below' or 'above'"
    },
    {
      "input": "width",
      "description": "Width of the dropdown"
    },
    {
      "input": "height",
      "description": "Height of the dropdown"
    }
  ];
  
  
  inputColumns: TableColumn[] = [
    {
      prop: 'input',
      name: 'Input',
      dataType: 'text',
      visible: true,
    },
    {
      prop: 'description',
      name: 'Description',
      dataType: 'text',
      visible:true,
    }
  ]
  eventColumns: TableColumn[] =[
    {
      prop:'event',
      name:'Event',
      dataType:'text',
      visible:true
    },
    {
      prop: 'description',
      name: 'Description',
      dataType: 'text',
      visible:true
    }
  ]

  tabs: TabModel[] = [
    {tabId:'1',
      tabTitle:'',
      tabIcon:"html5"
    },
    {tabId:'2',
      tabTitle:'',
      tabIcon:"angular"
    }
  ]
  tabProperties: TabModel[] = [
    {tabId:'1',
      tabTitle:'Inputs',
    },
    {tabId:'2',
      tabTitle:'Events',
    }
  ]
  onModalClick(e: any, event:any) {
    if((event.target as HTMLElement).classList.contains('button-wrapper') || (event.target as HTMLElement).classList.contains('button-title') || (event.target as HTMLElement).classList.contains('card')){
      this.selectedModal = e
    }
  }
  tabChange(){
    // this.table1.recalculate()
    this.table2.recalculate()
  }

  closeModal() {
    this.selectedModal = null

  }



















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
