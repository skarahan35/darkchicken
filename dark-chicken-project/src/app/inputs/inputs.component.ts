import { Component, HostListener, OnInit } from '@angular/core';
import { inputEventCodeHtml, inputEventCodeTs, inputSizeCode, labelPlaceholdercode, noDecorationCode, passiveCodeHtml, passiveCodeTs, validationCode, validationModelCode } from 'src/assets/codes/input';
import { validationRules, TabModel } from 'projects/darkchicken/src/lib/models/dc-models.model';
import { LanguageService } from 'projects/darkchicken/src/lib/services/language.service';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css'],
})
export class InputsComponent implements OnInit {

  constructor(private testService: LanguageService, private colorService:ColorService) { }

  validationModel = validationModelCode

  tabs: TabModel[] = [{
    tabId: 'des',
    tabTitle: 'Description'
  },
  {
    tabId: 'code',
    tabTitle: 'Code'
  },
  ]

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
}
