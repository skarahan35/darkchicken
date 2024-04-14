import { Component } from '@angular/core';
import { TabModel, TreeModel } from 'projects/darkchicken/src/lib/models/dc-models.model';
import { treeHTML, treeTS } from 'src/assets/codes/tree';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent {

  treeHTML = treeHTML
  treeTS = treeTS

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
