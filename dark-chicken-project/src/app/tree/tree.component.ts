import { Component } from '@angular/core';
import { TreeModel } from 'projects/darkchicken/src/lib/models/dc-models.model';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent {
  treeData: TreeModel[] = [
    {
      title: 'Parent 1',
      subItems: [
        {
          title: 'Child 1',
          subItems: [
            {
              title: 'Child 1',
            },
            {
              title: 'Child 2.1',
              icon: 'file',
              subItems: [
                {
                  title: 'Child 1',
                  icon: 'file'
                },
                {
                  title: 'Child 2.2',
                  icon: 'file',
                  subItems: [
                    {
                      title: 'Child 1',
                      icon: 'file'
                    },
                    {
                      title: 'Child 2.3',
                      icon: 'file',
                      subItems: [
                        {
                          title: 'Child 1',
                          icon: 'file'
                        },
                        {
                          title: 'Child 2.4',
                          icon: 'file',
                          subItems: [
                            {
                              title: 'Child 1',
                              icon: 'file'
                            },
                            {
                              title: 'Child 2.5',
                              icon: 'file'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Child 2',
          icon: 'file',
          subItems: [
            {
              title: 'Child 1',
              icon: 'file'
            },
            {
              title: 'Child 2',
              icon: 'file',
              subItems: [
                {
                  title: 'Child 1',
                  icon: 'file'
                },
                {
                  title: 'Child 2',
                  icon: 'file',
                  subItems: [
                    {
                      title: 'Child 1',
                      icon: 'file'
                    },
                    {
                      title: 'Child 2',
                      icon: 'file',
                      subItems: [
                        {
                          title: 'Child 1',
                          icon: 'file'
                        },
                        {
                          title: 'Child 2',
                          icon: 'file',
                          subItems: [
                            {
                              title: 'Child 1',
                              icon: 'file'
                            },
                            {
                              title: 'Child 2',
                              icon: 'file'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: 'Parent 2',
      icon: 'folder',
      subItems: [
        {
          title: 'Child 3',
          icon: 'file'
        },
        {
          title: 'Child 4',
          icon: 'file',
          subItems: [
            {
              title: 'Grandchild 1',
              icon: 'file'
            },
            {
              title: 'Grandchild 2',
              icon: 'file'
            }
          ]
        }
      ]
    }
  ];

  collapsed(e: any) {
    console.log({ collapsed: e })
  }
  expanded(e: any) {
    console.log({ expanded: e })
  }

  click(e: any) {
    console.log({ click: e })
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
