import { Component, ViewChild, HostListener, OnInit } from '@angular/core';
import { inputEventCodeHtml, inputEventCodeTs, inputSizeCode, labelPlaceholdercode, noDecorationCode, passiveCodeHtml, passiveCodeTs, validationCode, validationModelCode } from 'src/assets/codes/input';
import { validationRules, TabModel } from 'projects/darkchicken/src/lib/models/dc-models.model';
import { LanguageService } from 'projects/darkchicken/src/lib/services/language.service';
import { ColorService } from '../color.service';
import { TableColumn } from 'projects/darkchicken/src/lib/types/table-column.type';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css'],
})
export class InputsComponent implements OnInit {
  @ViewChild('table1') table1:any;
  @ViewChild('table2') table2:any;

  selectedModal = null


  constructor(private testService: LanguageService, private colorService:ColorService) { }

  validationModel = validationModelCode


  codeTabs:TabModel[] = [
    {
      tabId:'html',
      tabTitle:'HTML',
      tabIcon:'html5',
    },
    {
      tabId:'ts',
      tabTitle:'TS',
      tabIcon:'angular',
    }
  ]

  noDecorationCode = noDecorationCode
  labelPlaceholdercode = labelPlaceholdercode
  passiveCodeHtml = passiveCodeHtml
  passiveCodeTs = passiveCodeTs
  validationCode= validationCode
  inputEventCodeHtml=inputEventCodeHtml
  inputEventCodeTs=inputEventCodeTs
  inputSizeCode = inputSizeCode
  visibleInput = false


  consoleText = ''

  ngOnInit(): void {
    this.testService.setLanguage('en')
  }
  eventRows = [
    {
      "event": "dcValueChanged",
      "description": "Emitted when the value of the input changes"
    },
    {
      "event": "dcFocusOut",
      "description": "Emitted when the input loses focus"
    },
    {
      "event": "dcFocusIn",
      "description": "Emitted when the input gains focus"
    },
    {
      "event": "dcValidating",
      "description": "Emitted when the input is being validated"
    },
    {
      "event": "dcValidated",
      "description": "Emitted when the input validation is complete"
    },
    {
      "event": "dcClick",
      "description": "Emitted when the input is clicked"
    },
    {
      "event": "dcHover",
      "description": "Emitted when the mouse hovers over the input"
    },
    {
      "event": "dcMouseUp",
      "description": "Emitted when the mouse button is released over the input"
    },
    {
      "event": "dcMouseDown",
      "description": "Emitted when the mouse button is pressed over the input"
    },
    {
      "event": "dcMouseLeave",
      "description": "Emitted when the mouse leaves the input area"
    },
    {
      "event": "dcMouseEnter",
      "description": "Emitted when the mouse enters the input area"
    },
    {
      "event": "dcDoubleClick",
      "description": "Emitted when the input is double-clicked"
    },
    {
      "event": "dcKeyUp",
      "description": "Emitted when a key is released while the input is focused"
    }
  ]
  inputRows = [
    {
      "input": "placeholder",
      "description": "Text displayed in the input field before the user enters a value, providing a hint to the user"
    },
    {
      "input": "label",
      "description": "Label for the input field, describing what the input is for"
    },
    {
      "input": "type",
      "description": "Specifies the type of the input field (e.g., text, password, email, etc.). InputType is likely a type that provides a list of allowed types"
    },
    {
      "input": "value",
      "description": "Initial value of the input field. Can be of any data type"
    },
    {
      "input": "width",
      "description": "Specifies the width of the input field. CSS units (e.g., px, %, em) can be used"
    },
    {
      "input": "height",
      "description": "Specifies the height of the input field. CSS units (e.g., px, %, em) can be used"
    },
    {
      "input": "validationRules",
      "description": "Specifies validation rules for the input field. validationRules is likely a type that contains a set of validation rules"
    },
    {
      "input": "readonly",
      "description": "Indicates whether the input field is read-only. If true, the user cannot modify the input field"
    },
    {
      "input": "disabled",
      "description": "Indicates whether the input field is disabled. If true, the user cannot interact with the input field, and it is ignored when the form is submitted"
    },
    {
      "input": "visible",
      "description": "Indicates whether the input field is visible. If true, the input field is visible; if false, it is hidden"
    },
    {
      "input": "dcClass",
      "description": "Used to apply additional CSS classes to the input field. Useful for styling"
    },
    {
      "input": "inputId",
      "description": "Specifies the id attribute of the input field. Useful for associating labels with the input field or applying styles"
    }
  ]
  
  inputColumns: TableColumn[] = [
    {
      prop: 'input',
      name: 'Input',
      dataType: 'text',
      visible: true,
      width:20
    },
    {
      prop: 'description',
      name: 'Description',
      dataType: 'text',
      visible:true,
      width:700
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

  validationRulesText: validationRules[] = [
    {
      type: 'required',
      message: "Zorunlu alan"
    },
    {
      type: 'minLength',
      value: 3,
      message: "En az 3 karakter içermelidir."
    },
    {
      type: 'maxLength',
      value: 10,
      message: "En fazla 10 karakter içerebilir."
    },

  ];
  validationRulesNumber: validationRules[] = [
    {
      type: 'required',
      message: "Zorunlu alan"
    },
    {
      type: 'min',
      value: 5,
      message: 'En az 5 girilir.'
    },
    {
      type: 'max',
      value: 20,
      message: 'En falza 20 girilir.'
    }

  ];


  dcValueChanged(e: any) {
    console.log({"dcValueChanged": e});
  }
  dcFocusOut(e: any) {
    console.log({"dcFocusOut": e});
  }
  dcFocusIn(e: any) {
    console.log({"dcFocusIn": e});
  }
  dcValidating(e: any) {
    console.log({"dcValidating": e});
  }
  dcValidated(e: any) {
    console.log({"dcValidated": e});
  }

  isIn=false
  activeClass=''
  activetagName=''
  @HostListener('window:mousedown', ['$event'])
  test(event:any){
    if(this.isIn){
      if(event.srcElement.tagName == 'path' || 'svg'){
        event.srcElement.style.fill=this.colorService.generatePastelColor()
      }
      
      event.srcElement.style.backgroundColor=this.colorService.generatePastelColor()
      event.srcElement.style.boxShadow= '0 4px 30px rgba(0, 0, 0, 0.1)'
      this.activeClass = event.srcElement.classList[0]
      this.activetagName = event.srcElement.tagName
    }
  }

  onMouseEnter(){
    this.isIn=true
  }
  onMouseLeave(){
    this.isIn = false
  }


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
  onModalClick(e: any) {
    this.selectedModal = e

  }
  dcClick(e: any) {
    console.log({ dcClick: e })
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
  dcMouseOut(e: any) {
    console.log({ dcMouseOut: e })
  }
  dcMouseEnter(e: any) {
    console.log({ dcMouseEnter: e })
  }
  dcDoubleClick(e: any) {
    console.log({ dcDoubleClick: e })
  }
  closeModal() {
    this.selectedModal = null

  }
  tabChange(){
    // this.table1.recalculate()
    this.table2.recalculate()
  }
}
