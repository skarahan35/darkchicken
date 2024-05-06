import { Component, OnInit } from '@angular/core';
import { TreeModel } from 'projects/darkchicken/src/lib/models/dc-models.model';
import { DataService } from '../services/data.service';
import { ColumnMode } from 'projects/darkchicken/src/lib/types/column-mode.type';
import { checkboxTypes } from 'src/assets/codes/checkbox';
import { TableColumn } from 'projects/darkchicken/src/lib/types/table-column.type';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  rows = [];
  loadingIndicator = true;
  reorderable = true;

  treeData = [{
    "id": "s15",
    "title": "Computer Science",
    "icon": "computer",
    "subItems": [
      {
        "id": "s25",
        "title": "Algorithms",
        "subItems": [
          {
            "id": "s35",
            "title": "Sorting Algorithms",
            "subItems": [
              {
                "id": "s45",
                "title": "Bubble Sort",
              },
              {
                "id": "s55",
                "title": "Merge Sort",
              }
            ]
          },
          {
            "id": "s65",
            "title": "Search Algorithms",
            "subItems": [
              {
                "id": "s75",
                "title": "Binary Search",
              },
              {
                "id": "s85",
                "title": "Linear Search",
              }
            ]
          }
        ]
      },
      {
        "id": "a15",
        "title": "Data Structures",
        "subItems": [
          {
            "id": "a25",
            "title": "Arrays",
          },
          {
            "id": "a35",
            "title": "Linked Lists",
          }
        ]
      }
    ]
  },
  {
    "id": "d15",
    "title": "Mathematics",
    "icon": "nutritionix",
    "subItems": [
      {
        "id": "d25",
        "title": "Algebra",
        "subItems": [
          {
            "id": "d35",
            "title": "Linear Algebra",
          },
          {
            "id": "d45",
            "title": "Matrices",
          }
        ]
      },
      {
        "id": "d55",
        "title": "Geometry",
        "subItems": [
          {
            "id": "d65",
            "title": "Plane Geometry",
          },
          {
            "id": "d75",
            "title": "Spatial Geometry",
          }
        ]
      }
    ]
  }]

  columns: TableColumn[] = [{
    resizeable:false,prop: 'name', dataType: 'text', validationRules: [{
      type: 'required',
      message: 'this field is required'
    }],
    isEditable: true,
    visible: true,
    showInColumnChooser: true

  }, { resizeable:false,prop: 'sd', name: 'test', visible: true, minWidth: 100 }, {
    name: 'Gender', dataType: 'lookup', lookup: {
      dataSource: [
        { id: 0, sex: 'Male', icon: 'book' },
        { id: 1, sex: 'Female', icon: 'spa' }
      ],
      displayExp: 'sex',
      valueExp: 'id',
    },
    validationRules: [{ type: 'required', message: 'required' }],
    visible: true
  },
  {
    resizeable:false,prop: 'tree', name: 'TREE', dataType: 'lookup', lookup: {
      dataSource: this.treeData,
      displayExp: 'title',
      valueExp: 'id',
    },
    visible: true,
    validationRules: [{ type: 'required', message: 'requredd' },]
  },
  { resizeable:false,prop: 'boolean', name: 'Boolean', sortable: false, visible: true, dataType: 'boolean' },
  { resizeable:false,prop: 'date', name: 'Date', sortable: false, visible: true, dataType: 'date' },
  { resizeable:false,name: 'Company', sortable: false, visible: true }, { resizeable:false,name: 'Company', sortable: false, visible: true }, { resizeable:false,name: 'Company', sortable: false, visible: true }, { resizeable:false,name: 'Company', sortable: false, visible: true }, { resizeable:false,name: 'Company', sortable: false, visible: true }, { resizeable:false,name: 'Company', sortable: false, visible: true }, { resizeable:false,name: 'Company', sortable: false, visible: true }, { resizeable:false,name: 'Company', sortable: false, visible: true },];



  ColumnMode = ColumnMode;


  constructor() {
    this.fetch((data: any) => {
      this.rows = data;
      setTimeout(() => {
        this.loadingIndicator = false;
      }, 1500);
    });
  }

  fetch(cb: any) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
}
