import { Component, OnInit } from '@angular/core';
import { TreeModel } from 'projects/darkchicken/src/lib/models/dc-models.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit{
  dataSource:any=[]
  constructor(private dataService:DataService){

  }
  ngOnInit(): void {
    this.dataService.getData().subscribe(res => {
      this.dataSource = res;
    });
  }

  columns:any=['name', 'language', 'id', 'bio', 'version']

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
}
