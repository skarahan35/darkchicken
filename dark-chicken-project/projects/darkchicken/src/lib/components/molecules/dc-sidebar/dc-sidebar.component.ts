import { Component, OnInit } from '@angular/core';
import { SidebarDataService } from '../../../services/sidebar-data.service';
import { TreeModel } from '../../../models/dc-models.model';

@Component({
  selector: 'dcm-sidebar',
  templateUrl: './dc-sidebar.component.html',
  styleUrls: ['./dc-sidebar.component.css']
})
export class DcSidebarComponent implements OnInit {

  sidebarData: any[]  = [];
  isSidebarClosed: boolean = false;

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

  constructor(private sidebarDataservice: SidebarDataService){}

  ngOnInit(): void {
    this.sidebarDataservice.getSidebarData().subscribe((data:any) => {
      this.sidebarData = data;
    });
  }

  toggleMenu(event: any) {
    let arrowParent = event.target.parentElement.parentElement;
    arrowParent.classList.toggle("showMenu");
  }

  toggleSidebar() {
    let sidebar = document.querySelector(".sidebar");
    if (sidebar !== null) {
      sidebar.classList.toggle("close");
    }
  }

}
