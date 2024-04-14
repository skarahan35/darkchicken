export const treeHTML = `
<dca-tree [treeData]="treeData"
(dcClick)="click($event)"
(dcCollapsing)="collapsed($event)"
(dcExpanding)="expanded($event)"
(dcHover)="dcHover($event)"
(dcMouseUp)="dcMouseUp($event)"
(dcMouseDown)="dcMouseDown($event)"
(dcMouseLeave)="dcMouseLeave($event)"
(dcMouseEnter)="dcMouseEnter($event)"
(dcDoubleClick)="dcDoubleClick($event)"
[visible]="true" [expandOnlyIcon]="false"></dca-tree>

<dca-tree [treeData]="treeData"
(dcClick)="click($event)"
(dcCollapsing)="collapsed($event)"
(dcExpanding)="expanded($event)"
(dcHover)="dcHover($event)"
(dcMouseUp)="dcMouseUp($event)"
(dcMouseDown)="dcMouseDown($event)"
(dcMouseLeave)="dcMouseLeave($event)"
(dcMouseEnter)="dcMouseEnter($event)"
(dcDoubleClick)="dcDoubleClick($event)"
[visible]="true" [expandOnlyIcon]="true"></dca-tree>`

export const treeTS = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent {

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
`