import { Component, ElementRef, ViewChild } from '@angular/core';
import { DcDropdownComponent } from 'projects/darkchicken';
import { TreeModel } from 'projects/darkchicken/src/lib/models/dc-models.model';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css']
})
export class DropdownsComponent {

  @ViewChild('dropdown') content!: DcDropdownComponent;

  dropdownValue:any = ""

  options=['option 1', 'option 2', 'option 3']

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



  test(e:any){
    if(!e.item.subItems){
      this.dropdownValue = e.item.title
      this.content.closeDropdown()
    }
  }
  listData=[{
    id:1,
    name:'ergul 1',
    icon:'bolt'
  },{
    id:2,
    name:'ergul 2'
  },{
    id:3,
    name:'ergul 3'
  },{
    id:4,
    name:'ergul 4'
  },{
    id:5,
    name:'ergul 5'
  },{
    id:6,
    name:'ergul 6'
  },{
    id:7,
    name:'ergul 7'
  },]
  optionSelect(e:any){

      this.dropdownValue = e.listItem.name
      this.content.closeDropdown()
  }



}
