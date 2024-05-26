import { Component, ViewChild } from '@angular/core';
import { TableColumn } from 'projects/darkchicken';
import { TabModel, TreeModel } from 'projects/darkchicken/src/lib/models/dc-models.model';
import { treeHTML, treeTS } from 'src/assets/codes/tree';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent {
  selectedModal = null

  onModalClick(e: any, event:any) {
    if((event.target as HTMLElement).classList.contains('button-wrapper') || (event.target as HTMLElement).classList.contains('button-title') || (event.target as HTMLElement).classList.contains('card')){
      this.selectedModal = e
    }


  }
  closeModal() {
    this.selectedModal = null

  }

  eventRows = [
    {
      event: "dcClick",
      description: "Triggered when a node is clicked"
    },
    {
      event: "dcHover",
      description: "Triggered when the mouse hovers over a node"
    },
    {
      event: "dcMouseUp",
      description: "Triggered when the mouse button is released over a node"
    },
    {
      event: "dcMouseDown",
      description: "Triggered when the mouse button is pressed over a node"
    },
    {
      event: "dcMouseLeave",
      description: "Triggered when the mouse leaves a node"
    },
    {
      event: "dcMouseEnter",
      description: "Triggered when the mouse enters a node"
    },
    {
      event: "dcDoubleClick",
      description: "Triggered when a node is double-clicked"
    },
    {
      event: "dcExpanding",
      description: "Triggered when a node is expanded"
    },
    {
      event: "dcCollapsing",
      description: "Triggered when a node is collapsed"
    }
  ];
  inputRows = [
    {
      input: "treeData",
      description: "The data model for the tree, defining its nodes"
    },
    {
      input: "visible",
      description: "Controls the visibility of the tree component"
    },
    {
      input: "dcClass",
      description: "Custom CSS class applied to the tree component"
    },
    {
      input: "expandOnlyIcon",
      description: "Allows nodes to be expanded only by clicking on the icon"
    }
  ];

  inputColumns: TableColumn[] = [
    {
      prop: 'input',
      name: 'Input',
      dataType: 'text',
      visible: true
    },
    {
      prop: 'description',
      name: 'Description',
      dataType: 'text',
      visible:true
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
  
  @ViewChild('table1') table1:any;
  @ViewChild('table2') table2:any;
  tabChange(){
    this.table1.recalculate()
    this.table2.recalculate()
  }
  tabProperties: TabModel[] = [
    {tabId:'1',
      tabTitle:'Inputs',
    },
    {tabId:'2',
      tabTitle:'Events',
    }
  ]


  treeHTML = treeHTML
  treeTS = treeTS

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

  world: TreeModel[] = [
        {
      "title": "Africa",
      "icon": 'eye',
      "subItems": [
        {
          "title": "Northern Africa",
          "icon": "bolt",
          "subItems": [
            {
              "title": "Egypt",
              "icon": "bolt"
            },
            {
              "title": "Algeria",
              "icon": "bolt"
            },
            {
              "title": "Morocco",
              "icon": "bolt"
            }
          ]
        },
        {
          "title": "Eastern Africa",
          "icon": "bolt",
          "subItems": [
            {
              "title": "Kenya",
              "icon": "bolt"
            },
            {
              "title": "Tanzania",
              "icon": "bolt"
            },
            {
              "title": "Ethiopia",
              "icon": "bolt"
            }
          ]
        }
      ]
    },
    {
      "title": "Europe",
      "icon": "headset",
      "subItems": [
        {
          "title": "Western Europe",
          "icon": "bolt",
          "subItems": [
            {
              "title": "France",
              "icon": "bolt"
            },
            {
              "title": "Germany",
              "icon": "bolt"
            },
            {
              "title": "United Kingdom",
              "icon": "bolt"
            }
          ]
        },
        {
          "title": "Eastern Europe",
          "icon": "bolt",
          "subItems": [
            {
              "title": "Russia",
              "icon": "bolt"
            },
            {
              "title": "Poland",
              "icon": "bolt"
            },
            {
              "title": "Hungary",
              "icon": "bolt"
            }
          ]
        }
      ]
    }

  ]

  dcClick(e: any) {
    console.log({ dcClick: e })
  }
  dcCollapsing(e: any) {
    console.log({ dcCollapsing: e })
  }
  dcExpanding(e: any) {
    console.log({ dcExpanding: e })
  }
  dcHover(e: any) {
    console.log({ dcHover: e })
  }
  dcMouseUp(e: any) {
    console.log({ dcMouseUp: e })
  }
  dcMouseDown(e: any) {
    console.log({ dcMouseDown: e })
  }
  dcMouseLeave(e: any) {
    console.log({ dcMouseLeave: e })
  }
  dcMouseEnter(e: any) {
    console.log({ dcMouseEnter: e })
  }
  dcDoubleClick(e: any) {
    console.log({ dcDoubleClick: e })
  }
}
